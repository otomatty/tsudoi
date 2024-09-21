import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { supabase } from './config/supabase';

const app = new Hono();

// CORSミドルウェアを追加
app.use(
	'*',
	cors({
		// ローカル環境と本番環境の両方を許可
		// localhost:5173はローカル環境なので公開後は削除すること
		origin: ['http://localhost:5173', 'https://tsudoi.pages.dev'], // 許可するオリジンを指定
		allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowHeaders: ['Content-Type', 'Authorization'],
		exposeHeaders: ['Content-Length'],
		maxAge: 600,
		credentials: true,
	}),
);

// 既存のルート
app.get('/', (c) => c.text('Hello Hono!'));

// ユーザー登録エンドポイント
app.post('/register-user', async (c) => {
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

// 管理者チェックエンドポイント
app.get('/check-admin', async (c) => {
	const authHeader = c.req.header('Authorization');

	if (!authHeader) {
		return c.json({ error: 'Authorization header is missing' }, 401);
	}

	const token = authHeader.split(' ')[1];

	// トークンの検証
	const { data: user, error: authError } = await supabase.auth.getUser(token);

	if (authError || !user) {
		return c.json({ error: 'Invalid token' }, 401);
	}

	// ユーザーの役割を確認
	const { data, error } = await supabase.from('users').select('role').eq('id', user.user.id).single();

	if (error) {
		console.error('Error checking user role:', error);
		return c.json({ error: 'Failed to check user role' }, 500);
	}

	const isAdmin = data.role === 'admin';

	return c.json({ isAdmin });
});

export default app;
