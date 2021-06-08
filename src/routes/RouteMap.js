export default {
  home: '/home',
  demo: '/demo',
  notifications: '/notifications',
  liveAuctions: '/liveAuctions',
  explore: '/explore',
  create: '/create',
  profile: {
    index: '/profile',
    edit(userId) {
      return `/profile/:${userId}`;
    },
  },
};
