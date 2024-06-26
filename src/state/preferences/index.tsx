import React from 'react'

import {Provider as AltTextRequiredProvider} from './alt-text-required'
import {Provider as AutoplayProvider} from './autoplay'
import {Provider as DisableHapticsProvider} from './disable-haptics'
import {Provider as ExternalEmbedsProvider} from './external-embeds-prefs'
import {Provider as HiddenPostsProvider} from './hidden-posts'
import {Provider as InAppBrowserProvider} from './in-app-browser'
import {Provider as KawaiiProvider} from './kawaii'
import {Provider as LanguagesProvider} from './languages'
import {Provider as HighSaturationEnabledProvider} from './saturation' //Agreado para el botón de saturación **********************

export {
  useRequireAltTextEnabled,
  useSetRequireAltTextEnabled,
} from './alt-text-required'
export {useAutoplayDisabled, useSetAutoplayDisabled} from './autoplay'
export {useHapticsDisabled, useSetHapticsDisabled} from './disable-haptics'
export {
  useExternalEmbedsPrefs,
  useSetExternalEmbedPref,
} from './external-embeds-prefs'
export * from './hidden-posts'
export {useLabelDefinitions} from './label-defs'
export {useLanguagePrefs, useLanguagePrefsApi} from './languages'
export {
  useHighSaturationEnabled,
  useSetHighSaturationEnabled,
} from './saturation' //Agreado para el botón de saturación **********************

export function Provider({children}: React.PropsWithChildren<{}>) {
  return (
    <LanguagesProvider>
      <AltTextRequiredProvider>
        <HighSaturationEnabledProvider>
          {/*Agreado para el botón de saturación ***********************/}
          <ExternalEmbedsProvider>
            <HiddenPostsProvider>
              <InAppBrowserProvider>
                <DisableHapticsProvider>
                  <AutoplayProvider>
                    <KawaiiProvider>{children}</KawaiiProvider>
                  </AutoplayProvider>
                </DisableHapticsProvider>
              </InAppBrowserProvider>
            </HiddenPostsProvider>
          </ExternalEmbedsProvider>
        </HighSaturationEnabledProvider>
        {/*Agreado para el botón de saturación ***********************/}
      </AltTextRequiredProvider>
    </LanguagesProvider>
  )
}
