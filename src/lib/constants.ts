export const dashboardSidebarData = {
  user: {
    name: "sushant",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      isActive: true,
      icon: "/sidebar-logos/overview.png",
    },
    {
      title: "Conversations",
      url: "/dashboard/conversations",
      isActive: false,
      icon: "/sidebar-logos/conversations.png",
    },
    {
      title: "Leads",
      url: "/dashboard/leads",
      isActive: false,
      icon: "/sidebar-logos/leads.png",
    },
    {
      title: "Unanswered",
      url: "/dashboard/unanswered",
      isActive: false,
      icon: "/sidebar-logos/unanswered.png",
    },
  ],
  navConfigure: [
    {
      title: "Knowledge Base",
      url: "/dashboard/knowledge-base",
      isActive: false,
      icon: "/sidebar-logos/knowledge-base.png",
    },
    {
      title: "Appearance",
      url: "/dashboard/appearance",
      isActive: false,
      icon: "/sidebar-logos/appearance.png",
    },
    {
      title: "Bot Settings",
      url: "/dashboard/bot-settings",
      isActive: false,
      icon: "/sidebar-logos/bot-settings.png",
    },
    {
      title: "Embed Code",
      url: "/dashboard/embed-code",
      isActive: false,
      icon: "/sidebar-logos/embed-code.png",
    },
  ],
};
