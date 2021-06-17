export default {
  home: '/home',
  notifications: '/notifications',
  liveAuctions: {
    index: '/live-auctions',
    view(liveAuctionId) {
      return `/live-auctions/${liveAuctionId}`;
    },
  },
  explore: '/explore',
  create: '/create',
  connectWallet: '/connect-wallet',
  claimingNFT: {
    index: '/claiming-NFT',
    success: '/claiming-NFT/success',
  },
  profile: {
    index: '/profile',
    edit: '/profile/edit',
    upvote: '/profile/upvote',
    communityUpvote: '/profile/community-upvote',
    verifyProfile: {
      index: '/profile/verify-profile',
      viaTwitter: '/profile/verify-profile/via-twitter',
    },
  },
};
