// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingMinimal,
  LandingDarkMode,
  LandingThemeColor,
  LandingPricingPlans,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements
} from '../components/_external-pages/landing';
import MainNavbar from '../layouts/main/MainNavbar';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <MainNavbar />
      <RootStyle title="The starting point for your next project | Minimal-UI" id="move_top">
        <LandingHero />
        <ContentStyle>
          <LandingMinimal />
          <LandingHugePackElements />
          <LandingDarkMode />
          <LandingThemeColor />
          <LandingCleanInterfaces />
          <LandingPricingPlans />
          <LandingAdvertisement />
        </ContentStyle>
      </RootStyle>
    </>
  );
}
