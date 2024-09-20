import { lazy } from "solid-js";

export const sitePages = {
  HomePage: lazy(() => import("./pages/site/Home/HomePage")),
  PricingPage: lazy(() => import("./pages/site/Pricing/PricingPage")),
  FAQPage: lazy(() => import("./pages/site/FAQ/FAQPage")),
  PrivacyPage: lazy(() => import("./pages/site/Privacy/PrivacyPage")),
  TermsPage: lazy(() => import("./pages/site/Terms/TermsPage")),
  ContactPage: lazy(() => import("./pages/site/Contact/ContactPage")),
  LoginPage: lazy(() => import("./pages/site/Login/LoginPage")),
  SignupPage: lazy(() => import("./pages/site/Signup/SignupPage")),
  ForgotPasswordPage: lazy(
    () => import("./pages/site/Forgot-password/ForgotPasswordPage")
  ),
  HelpPage: lazy(() => import("./pages/site/Help/HelpPage")),
  GettingStartedPage: lazy(
    () => import("./pages/site/Help/GettingStarted/GettingStartedPage")
  ),
  AccountSetupPage: lazy(
    () => import("./pages/site/Help/AccountSetup/AccountSetupPage")
  ),
  PrivacySettingsPage: lazy(
    () => import("./pages/site/Help/PrivacySettings/PrivacySettingsPage")
  ),
  PostingPage: lazy(() => import("./pages/site/Help/Posting/PostingPage")),
  EventsPage: lazy(() => import("./pages/site/Help/Events/EventsPage")),
  MessagingPage: lazy(
    () => import("./pages/site/Help/Messaging/MessagingPage")
  ),
  LoginIssuesPage: lazy(
    () => import("./pages/site/Help/LoginIssues/LoginIssuesPage")
  ),
  PostVisibilityPage: lazy(
    () => import("./pages/site/Help/PostVisibility/PostVisibilityPage")
  ),
  NotificationSettingsPage: lazy(
    () =>
      import("./pages/site/Help/NotificationSettings/NotificationSettingsPage")
  ),
  AccessibilityPage: lazy(
    () => import("./pages/site/Accessibility/AccessibilityPage")
  ),
};

export const adminPages = {
  AdminHomePage: lazy(() => import("./pages/admin/Home/AdminHomePage")),
  AdminUsersPage: lazy(() => import("./pages/admin/Users/AdminUsersPage")),
  AdminContentPage: lazy(
    () => import("./pages/admin/Content/AdminContentPage")
  ),
  AdminStatisticsPage: lazy(
    () => import("./pages/admin/Statistics/AdminStatisticsPage")
  ),
  AdminSettingsPage: lazy(
    () => import("./pages/admin/Settings/AdminSettingsPage")
  ),
  AdminAppearancePage: lazy(
    () => import("./pages/admin/Appearance/AdminAppearancePage")
  ),
  AdminHelpPage: lazy(() => import("./pages/admin/Help/AdminHelpPage")),
};
