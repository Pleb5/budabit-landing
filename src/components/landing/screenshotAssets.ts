import communityCurationDarkDesktop from '@/assets/screenshots/community-curation-dark-desktop.png';
import communityCurationDarkMobile from '@/assets/screenshots/community-curation-dark-mobile.png';
import communityCurationDesktop from '@/assets/screenshots/community-curation-desktop.png';
import communityCurationMobile from '@/assets/screenshots/community-curation-mobile.png';
import communityHomeDarkDesktop from '@/assets/screenshots/community-home-dark-desktop.png';
import communityHomeDarkMobile from '@/assets/screenshots/community-home-dark-mobile.png';
import communityHomeDesktop from '@/assets/screenshots/community-home-desktop.png';
import communityHomeMobile from '@/assets/screenshots/community-home-mobile.png';
import communityNetworkDarkDesktop from '@/assets/screenshots/community-network-dark-desktop.png';
import communityNetworkDarkMobile from '@/assets/screenshots/community-network-dark-mobile.png';
import communityNetworkDesktop from '@/assets/screenshots/community-network-desktop.png';
import communityNetworkMobile from '@/assets/screenshots/community-network-mobile.png';
import moderationAccessDarkDesktop from '@/assets/screenshots/moderation-access-dark-desktop.png';
import moderationAccessDarkMobile from '@/assets/screenshots/moderation-access-dark-mobile.png';
import moderationAccessDesktop from '@/assets/screenshots/moderation-access-desktop.png';
import moderationAccessMobile from '@/assets/screenshots/moderation-access-mobile.png';

export const screenshotAssets = {
  communityCuration: {
    desktop: communityCurationDesktop,
    mobile: communityCurationMobile,
    darkDesktop: communityCurationDarkDesktop,
    darkMobile: communityCurationDarkMobile,
  },
  communityHome: {
    desktop: communityHomeDesktop,
    mobile: communityHomeMobile,
    darkDesktop: communityHomeDarkDesktop,
    darkMobile: communityHomeDarkMobile,
  },
  communityNetwork: {
    desktop: communityNetworkDesktop,
    mobile: communityNetworkMobile,
    darkDesktop: communityNetworkDarkDesktop,
    darkMobile: communityNetworkDarkMobile,
  },
  moderationAccess: {
    desktop: moderationAccessDesktop,
    mobile: moderationAccessMobile,
    darkDesktop: moderationAccessDarkDesktop,
    darkMobile: moderationAccessDarkMobile,
  },
} as const;
