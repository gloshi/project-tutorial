import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18/i18nForTests";
import { Story } from "@storybook/react";
import { Suspense } from "react";
import i18n from "shared/config/i18/i18nForTests";

export const TranslateDecorator = () => (StoryComponent: Story) =>
  (
    <Suspense fallback="">
      <StoryComponent />
    </Suspense>
  );
