import { Route } from "@solidjs/router";
import { SiteLayout, AdminLayout } from "./Layouts";
import { sitePages, adminPages } from "./Pages";

export const AppRoutes = (props: any) => (
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
    </Route>
    <Route path="/login" component={sitePages.LoginPage} />
    <Route path="/signup" component={sitePages.SignupPage} />
    <Route path="/forgot-password" component={sitePages.ForgotPasswordPage} />
    <Route path="/admin" component={props.isAdmin() ? AdminLayout : SiteLayout}>
      <Route path="/" component={adminPages.AdminHomePage} />
      <Route path="/users" component={adminPages.AdminUsersPage} />
      <Route path="/content" component={adminPages.AdminContentPage} />
      <Route path="/statistics" component={adminPages.AdminStatisticsPage} />
      <Route path="/settings" component={adminPages.AdminSettingsPage} />
      <Route path="/appearance" component={adminPages.AdminAppearancePage} />
      <Route path="/help" component={adminPages.AdminHelpPage} />
    </Route>
  </>
);
