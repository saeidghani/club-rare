export default {
  home: '/home',
  notifications: '/notifications',
  liveAuctions: '/live-auctions',
  explore: '/explore',
  create: '/create',
  connectWallet: '/connect-wallet',
  claimingNFT: '/claiming-NFT',
  profile: {
    index: '/profile',
    edit(userId) {
      return `/profile/:${userId}`;
    },
    communityUpvote: '/profile/community-upvote',
    verifyProfile: {
      index: '/profile/verify-profile',
      viaTwitter: '/profile/verify-profile/via-twitter',
    },
  },
};
