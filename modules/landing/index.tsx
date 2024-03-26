import CodeSampleSection from './components/code-sample-section';
import FeaturesSection from './components/features-section';
import HeroSection from './components/hero-section';
import ModelsSection from './components/models-sections';
import OpenSourceSection from './components/open-source-section';
import PanelSection from './components/panel-section';
import PricingSection from './components/pricing-section';
import { GoogleGeminiEffect } from './components/visualization-section';
export default function Landing() {
  return (
    <>
      <HeroSection />
      <CodeSampleSection />
      <GoogleGeminiEffect />
      <PricingSection />
      <PanelSection />
      <ModelsSection />
      <FeaturesSection />
      <OpenSourceSection />
    </>
  );
}
