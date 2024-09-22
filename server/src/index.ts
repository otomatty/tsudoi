import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { createClient } from '@supabase/supabase-js';
type Bindings = {
	SUPABASE_URL: string;
	SUPABASE_KEY: string;
	// 他の環境変数も同様に定義
};
const app = new Hono<{ Bindings: Bindings }>();

// CORSミドルウェアを追加
app.use(
	'*',
	cors({
		origin: ['http://localhost:5173', 'https://tsudoi.pages.dev'], // フロントエンドのURLを指定
		allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowHeaders: ['Content-Type', 'Authorization'],
		exposeHeaders: ['Content-Length'],
		maxAge: 600,
		credentials: true,
	})
);

// Supabaseクライアントの初期化

// ユーザー登録エンドポイント
app.post('/register-user', async (c) => {
	const supabaseUrl = c.env.SUPABASE_URL;
	const supabaseKey = c.env.SUPABASE_KEY;
	const supabase = createClient(supabaseUrl, supabaseKey);
	try {
		const userData = await c.req.json();

		// Supabaseを使用してユーザーを登録
		const { data, error } = await supabase.auth.admin.createUser({
			email: userData.email,
			password: userData.password,
			email_confirm: true,
		});

		if (error) throw error;

		// ユーザーメタデータを保存
		const { error: metaError } = await supabase.from('users').insert({
			id: data.user.id,
			email: data.user.email,
			role: 'user',
		});

		if (metaError) throw metaError;

		return c.json({ message: 'User registered successfully', user: data.user });
	} catch (error) {
		console.error('Error registering user:', error);
		return c.json({ error: 'Failed to register user' }, 500);
	}
});

// ログインエンドポイントの追加
app.post('/login', async (c) => {
	const supabaseUrl = c.env.SUPABASE_URL;
	const supabaseKey = c.env.SUPABASE_KEY;
	const supabase = createClient(supabaseUrl, supabaseKey);

	try {
		const { email, password } = await c.req.json();

		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) throw error;

		return c.json({ message: 'Login successful', user: data.user, session: data.session });
	} catch (error) {
		console.error('Error logging in:', error);
		return c.json({ error: 'Failed to login' }, 401);
	}
});

export default app;
