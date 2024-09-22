import { Route } from "@solidjs/router";
import { SiteLayout, AppLayout, AdminLayout } from "./Layouts";
import { sitePages, adminPages, appPages, authPages } from "./Pages";
import ProtectedRoute from "./components/app/ProtectedRoute";

export const AppRoutes = () => {
  return (
    <>
      <Route path="/" component={SiteLayout}>
        <Route path="/" component={sitePages.HomePage} />
        <Route path="/pricing" component={sitePages.PricingPage} />
        <Route path="/privacy" component={sitePages.PrivacyPage} />
        <Route path="/terms" component={sitePages.TermsPage} />
        <Route path="/faq" component={sitePages.FAQPage} />
        <Route path="/contact" component={sitePages.ContactPage} />
        <Route path="/help">
          <Route path="/" component={sitePages.HelpPage} />
          <Route
            path="/getting-started"
            component={sitePages.GettingStartedPage}
          />
          <Route path="/account-setup" component={sitePages.AccountSetupPage} />
          <Route
            path="/privacy-settings"
            component={sitePages.PrivacySettingsPage}
          />
          <Route path="/posting" component={sitePages.PostingPage} />
          <Route path="/events" component={sitePages.EventsPage} />
          <Route path="/messaging" component={sitePages.MessagingPage} />
          <Route path="/login-issues" component={sitePages.LoginIssuesPage} />
          <Route
            path="/post-visibility"
            component={sitePages.PostVisibilityPage}
          />
          <Route
            path="/notification-settings"
            component={sitePages.NotificationSettingsPage}
          />
        </Route>
        <Route path="/accessibility" component={sitePages.AccessibilityPage} />
        <Route
          path="/forgot-password"
          component={sitePages.ForgotPasswordPage}
        />
        <Route path="/signup" component={sitePages.SignupPage} />
      </Route>
      <Route path="/login" component={sitePages.LoginPage} />
      <Route path="/auth/callback" component={authPages.CallbackPage} />
      <Route path="/webapp" component={AppLayout}>
        <Route
          path="/profile-settings"
          component={() => (
            <ProtectedRoute allowedRoles={["user"]}>
              <appPages.ProfileSettingsPage />
            </ProtectedRoute>
          )}
        />
      </Route>
      {/* 管理者ルートは省略 */}
    </>
  );
};
