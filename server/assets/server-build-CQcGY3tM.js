import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError, useActionData, Form } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, Suspense, lazy, useMemo, Children, useSyncExternalStore } from "react";
import { useReducedMotion, AnimatePresence, usePresence } from "framer-motion";
import { useMDXComponents, MDXProvider } from "@mdx-js/react";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      // If you wish to abort the rendering process, you can pass a signal here.
      // Please refer to the templates for example son how to configure this.
      // signal: controller.signal,
      onError(error2) {
        console.error(error2);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "oklch(84.42% 0.19 202.24)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const notFoundPoster = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCABAAEADAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABAYDBQABBwL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAA5V08yLHoDDYNgxJHRa8hFEklbmS9AoObTssxD6/KwqJ6VRg4APobRBbZj3O5QslX1GlT21TtokddVIHubc7rotmtg0vhhlBMtofQzWMe2qits4MULqvSbGlenLMibq3QhVZWsVXV6BHLM8lcqXKySlWe0besFLm6rgBirP8A/8QAJBAAAgICAgMBAAIDAAAAAAAAAgMAAQQFERIGITETFDIgIiP/2gAIAQEAAT8A2eWY49zPdbGl/hgl1dVzUt74dVEIqmWVzea2qximxTa3lUpdyllF4pFXyIxDptepoEF+NVcDD7B6mev+UsqqbTRf9ruVqxD7UHXK5jEgu+BmMpY8EU1D080NXUwMcWBVjD3YY43XaZO9pz+OZ1F+P2D7HA0LuIxWPLmbUixw4mHtmoZzRTxzzCl8Uwo/OY0vsE2du08c2Fc0DLmXjJbj9g4mH+aFl2nkmTTWlQwoDSD5cwfGGtP2MzPHLQn+sDVuSfYJh5TxDofMHHbkDdDN1rWJu7uovCY0vVQNI66/rMLZoAuPU2mWgkWVwtoi2WHqIpLq7DxMNqkD7nkmekyuvU0P4tZ7qGKgD0NTHYX6fZsmM/iX7v5GtMX37v7NLmECq7XLyLeF0E3K2U/3PGkXXu5lF/pP/8QAGxEAAwEBAAMAAAAAAAAAAAAAAAECERASICH/2gAIAQIBAT8AbG/WRiejXMFJhKKrCZQ5MMF2xs0Q0Io0pb2R8rrrBUJmjrDdMPEuBJokS0uCVghDKXIof0tYIR//xAAbEQADAQEBAQEAAAAAAAAAAAAAAQIREhAgMf/aAAgBAwEBPwCCV8MsRCwXumlkoVCo00Q0OWRJEHJhhnnJKwz5Xzpp0I06Js0ejbQrIKYxEswuNOcI/CvP/9k=";
const notFoundVideo = "/assets/notfound-Cfa33_DP.mp4";
const flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=";
const flatlineVideo = "/assets/flatline-DaiGY3H4.mp4";
const icon$2 = "_icon_1tdl1_2";
const styles$J = {
  icon: icon$2
};
const sprites = "/assets/icons-v4kTDGl_.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$J.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_13dm1_2";
const styles$I = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$I.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$6 = "_loader_1o1zt_2";
const text$4 = "_text_1o1zt_17";
const span = "_span_1o1zt_43";
const styles$H = {
  loader: loader$6,
  text: text$4,
  span
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$H.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$H.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$H.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible2 = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show) return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show) return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible: visible2, status, nodeRef });
};
const button$5 = "_button_1l2e3_2";
const text$3 = "_text_1l2e3_132";
const loader$5 = "_loader_1l2e3_145";
const icon$1 = "_icon_1l2e3_158";
const styles$G = {
  button: button$5,
  text: text$3,
  loader: loader$5,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$G.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$G.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$G.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$G.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$G.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible2
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_1mhmf_2";
const styles$F = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible: visible2, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$F.hidden, className),
        "data-hidden": !visible2 && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_1s9re_2";
const content$3 = "_content_1s9re_20";
const value = "_value_1s9re_24";
const styles$E = {
  text: text$2,
  content: content$3,
  value
};
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef();
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    useEffect(() => {
      const outputInstance = output.current;
      const initText = async () => {
        if (start && !reduceMotion) {
          await delay(startDelay);
        }
        outputInstance.textContent = text2;
      };
      initText();
      return () => {
        outputInstance.textContent = "";
      };
    }, [reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$E.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$E.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$E.content, ref: container2, children: /* @__PURE__ */ jsx("span", { className: styles$E.value, ref: output }) })
    ] });
  }
);
const heading$2 = "_heading_e2qtd_2";
const styles$D = {
  heading: heading$2
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$D.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page = "_page_memxv_2";
const videoContainer$1 = "_videoContainer_memxv_22";
const video$1 = "_video_memxv_22";
const credit = "_credit_memxv_78";
const details$3 = "_details_memxv_102";
const text$1 = "_text_memxv_115";
const title$7 = "_title_memxv_122";
const titleFlatline = "_titleFlatline_memxv_123";
const subheading = "_subheading_memxv_155";
const description$5 = "_description_memxv_185";
const button$4 = "_button_memxv_204";
const styles$C = {
  page,
  videoContainer: videoContainer$1,
  video: video$1,
  credit,
  details: details$3,
  text: text$1,
  title: title$7,
  titleFlatline,
  subheading,
  description: description$5,
  button: button$4
};
function useFormInput(initialValue = "") {
  const [value2, setValue] = useState(initialValue);
  const [error2, setError] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setIsDirty(true);
    if (error2 && event.target.checkValidity()) {
      setError(null);
    }
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    setError(event.target.validationMessage);
  };
  const handleBlur = (event) => {
    if (isDirty) {
      event.target.checkValidity();
    }
  };
  return {
    value: value2,
    error: error2,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid
  };
}
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options2 = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current)) return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options2);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options2, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error2) {
      reject(`Error loading ${srcSet}: ${error2}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob) throw new Error("Video thumbnail failed to load");
      const image5 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image5);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image5 = await generateImage(size);
      return { src, image: image5, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image5, width }) => `${image5} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$3 = "_image_4szht_2";
const elementWrapper = "_elementWrapper_4szht_49";
const placeholder = "_placeholder_4szht_71";
const element = "_element_4szht_49";
const button$3 = "_button_4szht_104";
const styles$B = {
  image: image$3,
  elementWrapper,
  placeholder,
  element,
  button: button$3
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$B.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc) return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted) return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$B.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$B.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$B.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$B.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$B.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-eK98OAAk.svg";
function Error$1({ error: error2 }) {
  const flatlined = !error2.status;
  const getMessage = () => {
    switch (error2.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error2.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error2.statusText || error2.data || error2.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$C.page, children: [
    flatlined && /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible: visible2 }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$C.details, children: /* @__PURE__ */ jsxs("div", { className: styles$C.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$C.title,
            "data-visible": visible2,
            level: 0,
            weight: "bold",
            children: error2.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$C.titleFlatline,
            "data-visible": visible2,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible2, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$C.subheading,
            "data-visible": visible2,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible2, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$C.description, "data-visible": visible2, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$C.button,
            "data-visible": visible2,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$C.button,
            "data-visible": visible2,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$C.videoContainer, "data-visible": visible2, children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            reveal: true,
            cover: true,
            noPauseButton: true,
            delay: 600,
            className: styles$C.video,
            src: flatlined ? flatlineVideo : notFoundVideo,
            placeholder: flatlined ? flatlinePoster : notFoundPoster
          }
        ),
        flatlined ? /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$C.credit,
            "data-visible": visible2,
            href: "https://www.imdb.com/title/tt0318871/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Berserk (1997)"
          }
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$C.credit,
            "data-visible": visible2,
            href: "https://www.imdb.com/title/tt0113568/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Ghost in the Shell (1995)"
          }
        )
      ] })
    ] }) })
  ] });
}
const monogram = "_monogram_1mxlb_2";
const highlight = "_highlight_1mxlb_7";
const styles$A = {
  monogram,
  highlight
};
const Monogram = forwardRef(({ highlight: highlight2, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": true,
      className: classes(styles$A.monogram, className),
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsx("path", { d: "M24 4a20 20 0 1 0 20 20A20 20 0 0 0 24 4zm0 6a14 14 0 1 1-14 14 14 14 0 0 1 14-14zm4 18l14 14-5 5-14-14 5-5z" }) }) }),
        /* @__PURE__ */ jsx("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
        highlight2 && /* @__PURE__ */ jsx("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx("rect", { className: styles$A.highlight, width: "100%", height: "100%" }) })
      ]
    }
  );
});
const toggle$1 = "_toggle_1lvbt_2";
const inner = "_inner_1lvbt_17";
const icon = "_icon_1lvbt_25";
const styles$z = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$z.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$z.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$z.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$z.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_1phd7_2";
const circle = "_circle_1phd7_29";
const mask = "_mask_1phd7_54";
const path = "_path_1phd7_72";
const styles$y = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$y.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$y.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$y.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$y.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$y.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$y.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const name$2 = "Ziying Qi";
const role = "AI-Powered Designer";
const disciplines = [
  "Data-Driven Developer",
  "UX Engineer",
  "Computational Designer",
  "Creative Technologist"
];
const url$1 = "http://localhost:3003/";
const repo = "https://github.com/QiqiCoder/portfolio";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  repo
};
const navLinks = [
  /* 暂时隐藏About me链接
  {
    label: 'About me',
    pathname: '/#details',
  },
  */
  {
    label: "AI Product",
    pathname: "/#ai-product",
    type: "work"
  },
  {
    label: "Data Visualization",
    pathname: "/#data-visualization-04",
    type: "work"
  },
  {
    label: "Creative Computing",
    pathname: "/#creative-computing-07",
    type: "work"
  },
  {
    label: "Contact",
    pathname: "/#contact",
    type: "contact"
  }
];
const navbar = "_navbar_1ykiy_2";
const logo = "_logo_1ykiy_14";
const nav = "_nav_1ykiy_2";
const navLink = "_navLink_1ykiy_36";
const mobileNav = "_mobileNav_1ykiy_188";
const visible = "_visible_1ykiy_208";
const mobileNavLink = "_mobileNavLink_1ykiy_212";
const themeToggle = "_themeToggle_1ykiy_225";
const styles$x = {
  navbar,
  logo,
  nav,
  navLink,
  mobileNav,
  visible,
  mobileNavLink,
  themeToggle
};
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const location = useLocation();
  return /* @__PURE__ */ jsxs("header", { className: styles$x.navbar, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        to: "/",
        className: styles$x.logo,
        "aria-label": `${config.name}, ${config.role}`,
        children: /* @__PURE__ */ jsx(Monogram, {})
      }
    ),
    /* @__PURE__ */ jsxs("nav", { className: styles$x.nav, children: [
      navLinks.map(({ label: label2, pathname, type }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          to: pathname,
          className: styles$x.navLink,
          "data-type": type,
          "aria-current": location.pathname === pathname ? "page" : void 0,
          children: label2
        },
        label2
      )),
      /* @__PURE__ */ jsx(ThemeToggle, { className: styles$x.themeToggle })
    ] }),
    isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
      /* @__PURE__ */ jsxs("nav", { className: `${styles$x.mobileNav} ${menuOpen ? styles$x.visible : ""}`, children: [
        navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx(
          Link$1,
          {
            to: pathname,
            className: styles$x.mobileNavLink,
            onClick: () => setMenuOpen(false),
            children: label2
          },
          label2
        )),
        /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
      ] })
    ] })
  ] });
};
const progress = "_progress_3typo_2";
const styles$w = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible2, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current) return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted) return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$w.progress,
      "data-status": state,
      "data-visible": visible2,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const container$2 = "_container_j3vhn_2";
const skip = "_skip_j3vhn_12";
const styles$v = {
  container: container$2,
  skip
};
const links$1 = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap"
  },
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
const loader$4 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$v.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$v.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error: error2 }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "You (probably) don't need CSS-in-JS",
  "abstract": "Vanilla CSS is good now actually. Here's a couple nifty techniques for dynamically styling React components with CSS custom properties.",
  "date": "2022-05-01",
  "banner": "/static/modern-styling-in-react-banner.jpg",
  "featured": true
};
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  }, { Embed: Embed2 } = _components;
  if (!Embed2) _missingMdxReference("Embed");
  return jsxs(Fragment$1, {
    children: [jsxs(_components.p, {
      children: ["When I first tried CSS-in-JS libraries like ", jsx(_components.a, {
        href: "https://styled-components.com/",
        children: "Styled Components"
      }), " and ", jsx(_components.a, {
        href: "https://emotion.sh",
        children: "Emotion"
      }), ", the thing that felt right about it was passing values or state directly into the styles for a component. It really closed the loop with the concept of React where the UI is a function of state. While this was a definite advancement over the traditional way of styling React with classes and pre-processed CSS, it still had its problems."]
    }), "\n", jsx(_components.p, {
      children: "To highlight some examples, I'll break down some typical examples using two main types of dynamic styles you'll run into with React components:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Values:"
        }), " like a color, delay, or position. Anything that represents a single value for a CSS property."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "States:"
        }), " like a primary button variant, or a loading state each having their own set of associated styles."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "where-we-are-today",
      children: "Where we are today"
    }), "\n", jsxs(_components.p, {
      children: ["Before we get started, for comparison I'll be using SCSS (with ", jsx(_components.a, {
        href: "https://css-tricks.com/bem-101/",
        children: "BEM syntax"
      }), ") and Styled Components in my examples for how styling is typically approached in React. I won't cover CSS-in-JS libraries that deal with writing CSS as JavaScript objects. I think there are already good solutions out there (I'd recommend ", jsx(_components.a, {
        href: "https://vanilla-extract.style/",
        children: "Vanilla Extract"
      }), ") if you prefer having type checking and living more fully on the JavaScript side of things. My solution is more for those of us that like writing CSS as CSS, but want to respond to the reactivity and state of components in a better way."]
    }), "\n", jsxs(_components.p, {
      children: ["If you're already familiar with the problem, ", jsx(_components.a, {
        href: "#theres-a-better-way-vanilla-css",
        children: "skip to the solution"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "values",
      children: "Values"
    }), "\n", jsxs(_components.p, {
      children: ["Using vanilla CSS, or pre-processed CSS by means of LESS or SCSS, the traditional way of passing a ", jsx(_components.em, {
        children: "value"
      }), " to your styles on was to just use inline styles. So if we have a button component that allows a color, it would look something like this:"]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "The problem with this approach is that it brings with it all the problems of inline styles. It now has higher specificity making it harder to override, and the styles aren't co-located with the rest of our button styles."
    }), "\n", jsx(_components.p, {
      children: "CSS-in-JS (in the case of Styled Components or Emotion) solved this problem by allowing dynamic values like this to be directly as props"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token comment",
          children: "// We can pass the `color` value into the styled component as a prop"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n", jsx(_components.span, {
          className: "token comment",
          children: "// The syntax is a little funky, but now in the styled component's styles"
        }), "\n", jsx(_components.span, {
          className: "token comment",
          children: "// we can use its props as a function"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "color"
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.h3, {
      id: "states",
      children: "States"
    }), "\n", jsx(_components.p, {
      children: "Traditionally, we'd use css classes and concatenate strings. This always felt messy and clunky, but it works nicely on the css side, particularly if you're using a naming convention like BEM along with a pre-processors. Say we have small, medium, and large button sizes, and a primary variant, it might look something like this:"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), "\n      ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token string",
              children: "'button'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ","
            }), " ", jsxs(_components.span, {
              className: "token template-string",
              children: [jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsx(_components.span, {
                className: "token string",
                children: "button--"
              }), jsxs(_components.span, {
                className: "token interpolation",
                children: [jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "size", jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ","
            }), " primary ", jsx(_components.span, {
              className: "token operator",
              children: "?"
            }), " ", jsx(_components.span, {
              className: "token string",
              children: "'button--primary'"
            }), " ", jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token keyword null nil",
              children: "null"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            }), "\n        ", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token method function property-access",
              children: "filter"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx(_components.span, {
              className: "token known-class-name class-name",
              children: "Boolean"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ")"
            }), "\n        ", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token method function property-access",
              children: "join"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx(_components.span, {
              className: "token string",
              children: "' '"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ")"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), "\n      ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), "\n    ", jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-scss",
      children: jsxs(_components.code, {
        className: "language-scss",
        children: [jsx(_components.span, {
          className: "token selector",
          children: ".button "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--primary "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token variable",
          children: "$primary-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--small "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "30"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--medium "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "40"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--large "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "60"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "The SCSS is looking nice and clean. I've always liked the pattern of using nesting to concatenate elements and modifiers in SCSS using the BEM syntax."
    }), "\n", jsxs(_components.p, {
      children: ["Our JSX, however, isn't faring so well. That string concatenation on the ", jsx(_components.code, {
        children: "className"
      }), " in the is a mess. The size property isn't too bad, because we're appending the value directly onto the class. The primary variant though... yuck. Not to mention the wacky ", jsx(_components.code, {
        children: "filter(Boolean)"
      }), " in there to prevent a double space in the class list for non-primary buttons. There are better ways of handling this, for example the ", jsx(_components.code, {
        children: "classnames"
      }), " package on NPM. But they only make the problem marginally more bearable."]
    }), "\n", jsx(_components.p, {
      children: "Unlike dynamic values, Styled Components is still a bit cumbersome in dealing with states"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "whitesmoke"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "primary"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " $primary-color", jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'small'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "30"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'medium'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'large'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["It's not ", jsx(_components.em, {
        children: "terrible"
      }), ", but the repeated functions to grab props gets repetitive and makes reading styles quite noisy. It can also get way worse depending on the type of state. If you have separate but mutually exclusive states sometimes it calls for a ternary expression that can end up looking even more convoluted and difficult to parse."]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), "\n    props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "primary"
              }), "\n      ", jsx(_components.span, {
                className: "token operator",
                children: "?"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token color",
                    children: "darkslateblue"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n        "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), "\n      ", jsx(_components.span, {
                className: "token operator",
                children: ":"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token color",
                    children: "whitesmoke"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n        "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "If you're using Prettier for code formatting like I do, you'll end up with a monstrosity like you see above. Monstrosity is a strong way of putting it, but I find the indentation and formatting really difficult to read."
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "theres-a-better-way-vanilla-css",
      children: "There's a better way: vanilla CSS"
    }), "\n", jsx(_components.p, {
      children: "The solution was with us all along: CSS custom properties (AKA CSS variables). Well, not really. When the methods I've covered above were established, CSS custom properties weren't that well supported by browsers. Support these days is pretty much green across the board (unless you still need to support ie11)."
    }), "\n", jsxs(_components.p, {
      children: ["After making the journey through using SCSS to Styled Components, I've come full circle back to vanilla CSS. I feel like there's an emerging trend of sticking more to platform standards with frameworks like Remix and Deno adhering closer to web standards instead of doing their own thing. I think this will happen with CSS as well, we won't need to reach for pre-processors and CSS-in-JS libraries as much because the native features are becoming ", jsx(_components.em, {
        children: "better"
      }), " than what they have to offer."]
    }), "\n", jsx(_components.p, {
      children: "That being said, here's how I've approached styling React components with vanilla CSS. Well, mostly vanilla CSS. I'm using postcss to get support some up and coming features like native nesting and custom media queries. The beauty of postcss is that as browsers support new features, the tooling slowly melts away."
    }), "\n", jsx(_components.h3, {
      id: "values-1",
      children: "Values"
    }), "\n", jsx(_components.p, {
      children: "A really neat trick I've found for passing values into css is using custom properties. It's pretty simple, we can just drop variables into the style property and it works."
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token string-property property",
              children: "'--color'"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [`Now you might be thinking "isn't this just inline styles with extra steps?", and while we are using inline styles to apply the variable, it doesn't come with the same downsides. For one, there's no specificity issue because we're declaring the property under the `, jsx(_components.code, {
        children: ".button"
      }), " selector in the css file. Secondly, all our styles are co-located, it's just the value of the custom property that's being passed down."]
    }), "\n", jsx(_components.p, {
      children: "This also makes it really convenient when working with properties like transforms or clip-paths where you only need to dynamically control one piece of the value"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token comment",
          children: "// All we need to pass is the value needed by the transform, rather than"
        }), "\n", jsx(_components.span, {
          className: "token comment",
          children: "// polluting our jsx with the full transform in the inline style"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " offset", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token string-property property",
              children: "'--offset'"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsxs(_components.span, {
              className: "token template-string",
              children: [jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsxs(_components.span, {
                className: "token interpolation",
                children: [jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "offset", jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx(_components.span, {
                className: "token string",
                children: "px"
              }), jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), " ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "transform"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "translate3d"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--offset"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [`There's way more you can do with CSS custom properties, like setting defaults and allowing overrides from the cascade for any components that compose one another to hook into, like a "CSS API". `, jsx(_components.a, {
        href: "https://lea.verou.me/2021/10/custom-properties-with-defaults/",
        children: "This article from Lea Verou"
      }), " does a great job at explaining this technique."]
    }), "\n", jsx(_components.h3, {
      id: "states-1",
      children: "States"
    }), "\n", jsxs(_components.p, {
      children: ["The best way I've found to deal with component states and variants with vanilla CSS is using data attributes. What I like about this is that it pairs nicely with the upcoming native CSS nesting syntax. The old technique of targeting BEM modifiers with ", jsx(_components.code, {
        children: "&--modifier"
      }), " doesn't work like it does in pre-processors. But with data attributes, we get similar ergonomics"]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "data-size"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "size", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "data-primary"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "primary", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-primary"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--colorPrimary"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'small'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "30"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'medium'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "40"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'large'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "60"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "Have a play with the example button component here:"
    }), "\n", jsx(Embed2, {
      src: "https://stackblitz.com/edit/vitejs-vite-mjs1oh?embed=1&file=src/Button/Button.jsx"
    }), "\n", jsxs(_components.p, {
      children: ["This looks similar to how modifiers are written using BEM syntax. It's also much more straightforward and easy to read than the Styled Components function syntax. The one downside is that we do gain a level of specificity that we don't with BEM modifiers using the ", jsx(_components.code, {
        children: "&--modifier"
      }), " pattern, but I think that's an acceptable tradeoff."]
    }), "\n", jsxs(_components.p, {
      children: ["It may seem kinda ", jsx(_components.em, {
        children: "weird"
      }), " at first to use data attributes for styling, but it gets around the problem of messy string concatenation using classes. It also mirrors how we can target accessibility attributes for interaction-based styling, for example:"]
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "aria-pressed"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "gainsboro"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "disabled"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "opacity"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0.4"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["I like this approach because it helps structure styling, we can see that any class is styling the base element, andy any attribute is styling a state. As for avoiding style clashes, there are better options now that automate the process like ", jsx(_components.a, {
        href: "https://github.com/css-modules/css-modules",
        children: "CSS Modules"
      }), " which is included out of the box in most React frameworks like Next.js and Create React App."]
    }), "\n", jsxs(_components.p, {
      children: ["Of course, these techniques don't require you to ", jsx(_components.em, {
        children: "only"
      }), " use vanilla CSS, you can just as easily combine them with CSS-in-JS or a pre-processor. However with new features like ", jsx(_components.a, {
        href: "https://www.w3.org/TR/css-nesting-1/",
        children: "nesting"
      }), " and ", jsx(_components.a, {
        href: "https://www.w3.org/TR/css-color-5/#relative-colors",
        children: "relative colors"
      }), " I think it's becoming less necessary to reach for these tools."]
    }), "\n", jsxs(_components.p, {
      children: ["The entirety of this website is styled using these techniques, so if you want to see an example of how this applies to some real components, take a gander at the ", jsx(_components.a, {
        href: "https://github.com/HamishMW/portfolio",
        children: "source code"
      }), "."]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const link$1 = "_link_1h1qj_2";
const styles$u = {
  link: link$1
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$u.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const footer = "_footer_gmxrz_2";
const link = "_link_gmxrz_16";
const date$1 = "_date_gmxrz_20";
const styles$t = {
  footer,
  link,
  date: date$1
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$t.footer, className), children: /* @__PURE__ */ jsxs(Text, { size: "s", align: "center", children: [
  /* @__PURE__ */ jsx("span", { className: styles$t.date, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}.` }),
  /* @__PURE__ */ jsx(Link, { secondary: true, className: styles$t.link, href: "/humans.txt", target: "_self", children: "Crafted by yours truly" })
] }) });
const section$2 = "_section_1adjn_2";
const styles$s = {
  section: section$2
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$s.section, className), ref, ...rest, children })
);
const project = "_project_7xwsz_20";
const section$1 = "_section_7xwsz_29";
const sectionInner = "_sectionInner_7xwsz_44";
const sectionBackground = "_sectionBackground_7xwsz_89";
const backgroundImage = "_backgroundImage_7xwsz_138";
const backgroundImageElement = "_backgroundImageElement_7xwsz_157";
const backgroundScrim = "_backgroundScrim_7xwsz_176";
const header$2 = "_header_7xwsz_192";
const headerContent = "_headerContent_7xwsz_212";
const details$2 = "_details_7xwsz_250";
const title$6 = "_title_7xwsz_262";
const description$4 = "_description_7xwsz_272";
const linkButton = "_linkButton_7xwsz_282";
const meta$g = "_meta_7xwsz_292";
const metaItem = "_metaItem_7xwsz_307";
const image$2 = "_image_7xwsz_327";
const sectionContent = "_sectionContent_7xwsz_335";
const sectionHeading = "_sectionHeading_7xwsz_358";
const sectionText$3 = "_sectionText_7xwsz_362";
const textRow = "_textRow_7xwsz_369";
const sectionColumns = "_sectionColumns_7xwsz_425";
const styles$r = {
  project,
  section: section$1,
  sectionInner,
  sectionBackground,
  backgroundImage,
  backgroundImageElement,
  backgroundScrim,
  header: header$2,
  headerContent,
  details: details$2,
  title: title$6,
  description: description$4,
  linkButton,
  meta: meta$g,
  metaItem,
  image: image$2,
  sectionContent,
  sectionHeading,
  sectionText: sectionText$3,
  textRow,
  sectionColumns
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$r.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$r.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$r.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$r.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$r.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$r.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles2 == null ? void 0 : roles2.length) && /* @__PURE__ */ jsx("ul", { className: styles$r.meta, children: roles2 == null ? void 0 : roles2.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$r.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$r.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$r.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$r.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$r.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$r.backgroundImage, className),
      "data-visible": visible2,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$r.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$r.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
};
const ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx("div", { className: classes(styles$r.image, className), children: /* @__PURE__ */ jsx(Image$1, { reveal: true, alt, delay: 300, ...rest }) });
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$r.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx(
  Heading,
  {
    className: classes(styles$r.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
);
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$r.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$r.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
);
const ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx(
  ProjectSectionContent,
  {
    className: classes(styles$r.sectionColumns, className),
    "data-centered": centered,
    ...rest
  }
);
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
const fireboyWatergirl = "_fireboyWatergirl_cgd1m_1";
const slogan$6 = "_slogan_cgd1m_8";
const sloganSubtitle$6 = "_sloganSubtitle_cgd1m_20";
const sloganTitle$6 = "_sloganTitle_cgd1m_29";
const sloganDivider$4 = "_sloganDivider_cgd1m_38";
const mainContent$5 = "_mainContent_cgd1m_46";
const repoLink$1 = "_repoLink_cgd1m_81";
const githubIcon$1 = "_githubIcon_cgd1m_99";
const videoContainer = "_videoContainer_cgd1m_105";
const videoFrame = "_videoFrame_cgd1m_114";
const styles$q = {
  fireboyWatergirl,
  slogan: slogan$6,
  sloganSubtitle: sloganSubtitle$6,
  sloganTitle: sloganTitle$6,
  sloganDivider: sloganDivider$4,
  mainContent: mainContent$5,
  repoLink: repoLink$1,
  githubIcon: githubIcon$1,
  videoContainer,
  videoFrame
};
const projectInfo = "_projectInfo_1odp0_2";
const contentSection$1 = "_contentSection_1odp0_6";
const contentLeft$1 = "_contentLeft_1odp0_16";
const infoBlock$2 = "_infoBlock_1odp0_20";
const infoTitle$1 = "_infoTitle_1odp0_24";
const infoList$1 = "_infoList_1odp0_34";
const contentRight$1 = "_contentRight_1odp0_49";
const overviewBlock$1 = "_overviewBlock_1odp0_55";
const overviewTitle$1 = "_overviewTitle_1odp0_59";
const overviewText$1 = "_overviewText_1odp0_68";
const sectionContainer$1 = "_sectionContainer_1odp0_113";
const sectionHeader$1 = "_sectionHeader_1odp0_120";
const sectionSubtitle = "_sectionSubtitle_1odp0_126";
const sectionTitle$2 = "_sectionTitle_1odp0_136";
const sectionDescription = "_sectionDescription_1odp0_146";
const solutionContainer$1 = "_solutionContainer_1odp0_195";
const solutionTitle$1 = "_solutionTitle_1odp0_200";
const solutionSteps$1 = "_solutionSteps_1odp0_208";
const solutionStep$1 = "_solutionStep_1odp0_208";
const stepContent$1 = "_stepContent_1odp0_224";
const stepNumber$1 = "_stepNumber_1odp0_231";
const sectionText$2 = "_sectionText_1odp0_252";
const solutionImage$1 = "_solutionImage_1odp0_260";
const solutionVideo$1 = "_solutionVideo_1odp0_270";
const projectStyles = {
  projectInfo,
  contentSection: contentSection$1,
  contentLeft: contentLeft$1,
  infoBlock: infoBlock$2,
  infoTitle: infoTitle$1,
  infoList: infoList$1,
  contentRight: contentRight$1,
  overviewBlock: overviewBlock$1,
  overviewTitle: overviewTitle$1,
  overviewText: overviewText$1,
  sectionContainer: sectionContainer$1,
  sectionHeader: sectionHeader$1,
  sectionSubtitle,
  sectionTitle: sectionTitle$2,
  sectionDescription,
  solutionContainer: solutionContainer$1,
  solutionTitle: solutionTitle$1,
  solutionSteps: solutionSteps$1,
  solutionStep: solutionStep$1,
  stepContent: stepContent$1,
  stepNumber: stepNumber$1,
  sectionText: sectionText$2,
  solutionImage: solutionImage$1,
  solutionVideo: solutionVideo$1
};
const meta$f = () => {
  return baseMeta({
    title: "Fireboy & Watergirl",
    description: "Built a Python-based 2D platformer with dynamically generated levels, enabling two players to collaborate in real-time to solve physics-driven puzzles and navigate shifting obstacles.",
    prefix: "Projects"
  });
};
const FireboyWatergirl = () => {
  const { theme } = useTheme();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$q.fireboyWatergirl, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$q.slogan, children: [
        /* @__PURE__ */ jsx("div", { className: styles$q.sloganSubtitle, children: "Fireboy & Watergirl" }),
        /* @__PURE__ */ jsx("h1", { className: styles$q.sloganTitle, children: "Sync to Survive: Leap, Solve, Repeat!" }),
        /* @__PURE__ */ jsx("div", { className: styles$q.sloganDivider })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$q.mainContent, children: [
        /* @__PURE__ */ jsx("div", { className: projectStyles.projectInfo, children: /* @__PURE__ */ jsxs("section", { className: projectStyles.contentSection, children: [
          /* @__PURE__ */ jsxs("div", { className: projectStyles.contentLeft, children: [
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "Tech Stack" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Python Pillow (PIL)" }),
                /* @__PURE__ */ jsx("li", { children: "CMU Graphics" }),
                /* @__PURE__ */ jsx("li", { children: "Custom Physics Engine" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "My Contribution" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Dynamic platform generation algorithm" }),
                /* @__PURE__ */ jsx("li", { children: "Dual-player control synchronization" }),
                /* @__PURE__ */ jsx("li", { children: "Physics-based obstacle interactions" }),
                /* @__PURE__ */ jsx("li", { children: "Collaborative puzzle mechanics" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: projectStyles.contentRight, children: /* @__PURE__ */ jsxs("div", { className: projectStyles.overviewBlock, children: [
            /* @__PURE__ */ jsx("h2", { className: projectStyles.overviewTitle, children: "Overview" }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "Developed a Python-based 2D platformer where two players cooperate in real-time to traverse procedurally generated levels, solving physics-driven puzzles with synchronized actions like button triggers and obstacle navigation." }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://github.com/Qiqicoder/Fireboy-Watergirl-2.0",
                target: "_blank",
                rel: "noopener noreferrer",
                className: styles$q.repoLink,
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      viewBox: "0 0 24 24",
                      className: styles$q.githubIcon,
                      children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                    }
                  ),
                  "Github Code Sample"
                ]
              }
            )
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: styles$q.videoContainer, children: /* @__PURE__ */ jsx(
          "iframe",
          {
            className: styles$q.videoFrame,
            src: "https://www.youtube.com/embed/nLxmk9BEezg",
            title: "Fireboy & Watergirl Gameplay",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FireboyWatergirl,
  meta: meta$f
}, Symbol.toStringTag, { value: "Module" }));
const heritageExplorer = "_heritageExplorer_10v9o_1";
const slogan$5 = "_slogan_10v9o_8";
const sloganSubtitle$5 = "_sloganSubtitle_10v9o_20";
const sloganTitle$5 = "_sloganTitle_10v9o_29";
const sloganDivider$3 = "_sloganDivider_10v9o_38";
const mainContent$4 = "_mainContent_10v9o_46";
const styles$p = {
  heritageExplorer,
  slogan: slogan$5,
  sloganSubtitle: sloganSubtitle$5,
  sloganTitle: sloganTitle$5,
  sloganDivider: sloganDivider$3,
  mainContent: mainContent$4
};
const carouselContainer = "_carouselContainer_6nwg9_1";
const imageContainer$1 = "_imageContainer_6nwg9_14";
const slide = "_slide_6nwg9_24";
const active = "_active_6nwg9_36";
const previous = "_previous_6nwg9_42";
const next = "_next_6nwg9_48";
const leftArrow = "_leftArrow_6nwg9_54";
const rightArrow = "_rightArrow_6nwg9_54";
const thumbnailContainer = "_thumbnailContainer_6nwg9_86";
const thumbnail = "_thumbnail_6nwg9_86";
const activeThumbnail = "_activeThumbnail_6nwg9_114";
const styles$o = {
  carouselContainer,
  imageContainer: imageContainer$1,
  slide,
  active,
  previous,
  next,
  leftArrow,
  rightArrow,
  thumbnailContainer,
  thumbnail,
  activeThumbnail
};
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);
  useInViewport(carouselRef, true);
  useEffect(() => {
    if (!images.length) return;
    const preloadImages = async () => {
      try {
        const imagesToLoad = [
          images[currentIndex],
          images[(currentIndex + 1) % images.length]
        ];
        await Promise.all(
          imagesToLoad.map((image5) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = getImageSrc(image5);
            });
          })
        );
        setIsLoading(false);
      } catch (error2) {
        console.error("Error preloading images:", error2);
        setIsLoading(false);
      }
    };
    preloadImages();
  }, [currentIndex, images]);
  const getImageSrc = (image5) => {
    if (typeof image5 === "string") return image5;
    return image5.compressed || image5.src || image5.url || "";
  };
  const goToPrevious = useCallback(() => {
    setDirection("previous");
    setCurrentIndex(
      (prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);
  const goToNext = useCallback(() => {
    setDirection("next");
    setCurrentIndex(
      (prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);
  const getSlideClassName = (index2) => {
    if (index2 === currentIndex) {
      return `${styles$o.slide} ${styles$o.active}`;
    }
    if (direction === "next" && index2 === (currentIndex - 1 + images.length) % images.length) {
      return `${styles$o.slide} ${styles$o.previous}`;
    }
    if (direction === "next" && index2 === (currentIndex + 1) % images.length) {
      return `${styles$o.slide} ${styles$o.next}`;
    }
    if (direction === "previous" && index2 === (currentIndex - 1 + images.length) % images.length) {
      return `${styles$o.slide} ${styles$o.previous}`;
    }
    if (direction === "previous" && index2 === (currentIndex + 1) % images.length) {
      return `${styles$o.slide} ${styles$o.next}`;
    }
    return styles$o.slide;
  };
  const handleImageError = (e) => {
    console.error("Image failed to load:", e.target.src);
  };
  return /* @__PURE__ */ jsxs("div", { ref: carouselRef, className: styles$o.carouselContainer, children: [
    /* @__PURE__ */ jsx("button", { className: styles$o.leftArrow, onClick: goToPrevious, "aria-label": "Previous image", children: "❮" }),
    /* @__PURE__ */ jsx("button", { className: styles$o.rightArrow, onClick: goToNext, "aria-label": "Next image", children: "❯" }),
    /* @__PURE__ */ jsx("div", { className: styles$o.imageContainer, children: images.map((image5, index2) => {
      const shouldRender = index2 === currentIndex || index2 === (currentIndex + 1) % images.length || index2 === (currentIndex - 1 + images.length) % images.length;
      if (!shouldRender) return null;
      return /* @__PURE__ */ jsx(
        "img",
        {
          src: getImageSrc(image5),
          alt: `Slide ${index2 + 1}`,
          className: getSlideClassName(index2),
          loading: index2 === currentIndex ? "eager" : "lazy",
          style: { opacity: isLoading ? 0 : 1 }
        },
        index2
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: styles$o.thumbnailContainer, children: images.map((image5, index2) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `${styles$o.thumbnail} ${index2 === currentIndex ? styles$o.activeThumbnail : ""}`,
        onClick: () => {
          setDirection(index2 > currentIndex ? "next" : "previous");
          setCurrentIndex(index2);
        },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: getImageSrc(image5),
            alt: `Thumbnail ${index2 + 1}`,
            loading: "lazy",
            onError: handleImageError
          }
        )
      },
      index2
    )) })
  ] });
};
const image1 = "/assets/data4_1-DAgMjRhn.jpg";
const image2 = "/assets/data4_1-DOQAK2wL.jpg";
const image3 = "/assets/data4_3-BYCACsgT.jpg";
const image4 = "/assets/data4_4-DLU0q9eT.jpg";
const optimizeImage = async (src, options2 = {}) => {
  const {
    maxWidth = 1200,
    quality = 90,
    format = "webp"
  } = options2;
  const img = new Image();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  return new Promise((resolve, reject) => {
    img.onload = () => {
      let width = img.width;
      let height = img.height;
      if (width > maxWidth) {
        height = height * maxWidth / width;
        width = maxWidth;
      }
      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);
      const optimized = canvas.toDataURL(`image/${format}`, quality / 100);
      resolve(optimized);
    };
    img.onerror = reject;
    img.src = src;
  });
};
const meta$e = () => {
  return baseMeta({
    title: "Heritage Knowledge Explorer",
    description: "Prototype a mobile app generating personalized heritage tours via voice/text queries, powered by a 5,000-node knowledge graph.",
    prefix: "Projects"
  });
};
const HeritageExplorer = () => {
  const [optimizedImages, setOptimizedImages] = useState([]);
  const { theme } = useTheme();
  const originalImages = [image1, image2, image3, image4];
  useEffect(() => {
    const processImages = async () => {
      const processed = await Promise.all(
        originalImages.map(async (img) => {
          return {
            original: img,
            compressed: await optimizeImage(img, {
              maxWidth: 1600,
              // 增加最大宽度
              quality: 95,
              // 提高质量
              format: "webp"
            }),
            thumbnail: await optimizeImage(img, {
              maxWidth: 300,
              // 增加缩略图尺寸
              quality: 90,
              // 提高缩略图质量
              format: "webp"
            })
          };
        })
      );
      setOptimizedImages(processed);
    };
    processImages();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$p.heritageExplorer, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$p.slogan, children: [
        /* @__PURE__ */ jsx("div", { className: styles$p.sloganSubtitle, children: "Heritage Knowledge Explorer" }),
        /* @__PURE__ */ jsx("h1", { className: styles$p.sloganTitle, children: "Click Through Centuries: Forgotten Histories Reloaded" }),
        /* @__PURE__ */ jsx("div", { className: styles$p.sloganDivider })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$p.mainContent, children: [
        /* @__PURE__ */ jsx("div", { className: projectStyles.projectInfo, children: /* @__PURE__ */ jsxs("section", { className: projectStyles.contentSection, children: [
          /* @__PURE__ */ jsxs("div", { className: projectStyles.contentLeft, children: [
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "Company" }),
              /* @__PURE__ */ jsxs("div", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Nanjing Cultural Bureau" }),
                /* @__PURE__ */ jsx("li", { children: "Southeast University" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "Team" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Meixuan Liang" }),
                /* @__PURE__ */ jsx("li", { children: "Yunru Lin" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "My Contribution" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "User testing" }),
                /* @__PURE__ */ jsx("li", { children: "Interactive knowledge mapping" }),
                /* @__PURE__ */ jsx("li", { children: "Visual search optimization" }),
                /* @__PURE__ */ jsx("li", { children: "Time-based exploration design" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: projectStyles.contentRight, children: /* @__PURE__ */ jsxs("div", { className: projectStyles.overviewBlock, children: [
            /* @__PURE__ */ jsx("h2", { className: projectStyles.overviewTitle, children: "Overview" }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "Nanjing's archives hold incredible stories of China's revolutionary past – but how do you get Gen Z to care about dusty old records? That was the challenge from Nanjing Cultural Bureau." }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "We took 1.6 million words of historical texts and turned them into something you can actually play with. My focus: making historical connections as intuitive as TikTok scrolling." }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "Here's how it works:" }),
            /* @__PURE__ */ jsxs("p", { className: projectStyles.overviewText, children: [
              "1. ",
              /* @__PURE__ */ jsx("strong", { children: "Time Slider" }),
              ": Drag to see how a site changed from 1927→2024",
              /* @__PURE__ */ jsx("br", {}),
              "2. ",
              /* @__PURE__ */ jsx("strong", { children: "Bar Search" }),
              ': "Show protest routes" triggers instant maps',
              /* @__PURE__ */ jsx("br", {}),
              "3. ",
              /* @__PURE__ */ jsx("strong", { children: "3D Mind Map" }),
              ": Tap any person/event to see hidden links"
            ] }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "Neo4j mapped relationships like social networks, paired with 3D gaming visuals. Teachers loved it – testers at Nanjing Normal University said it made history class feel like detective work!" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(
          ImageCarousel,
          {
            images: optimizedImages.map((img) => ({
              src: img.original,
              compressed: img.compressed,
              thumbnail: img.thumbnail
            }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HeritageExplorer,
  meta: meta$e
}, Symbol.toStringTag, { value: "Module" }));
const volkiharBackgroundLarge = "/assets/volkihar-background-large-BNfdj2Th.jpg";
const volkiharBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAASACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABQYHBAj/xAAXAQADAQAAAAAAAAAAAAAAAAABAwQC/9oADAMBAAIQAxAAAADgoimUKoj8SefaKhpIho2XuieIyPIHOkiuVz//xAAhEAABAwMEAwAAAAAAAAAAAAACAAEDBAUGERIhIhMVNf/aAAgBAQABPwCmqSgPVlh2YyUbbN6K9BdreTETOshtoHObi2ijh1VIRU/LKw3ySOdgM+i9RS3eDyAXZRKBQcSrD/nEv//EABsRAAIDAQEBAAAAAAAAAAAAAAABAgMREBIx/9oACAECAQE/AE8K7DdROPEQk0Z66in4f//EABkRAAMBAQEAAAAAAAAAAAAAAAABEQISIP/aAAgBAwEBPwCGkQTKI3y0WeNn/9k=";
const volkiharBackground = "/assets/volkihar-background-BwfMx1oT.jpg";
const volkiharBannerLarge = "/assets/volkihar-banner-large-B7psY5Jh.jpg";
const volkiharBannerPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAGAAsDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgn/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAAAjGoF0n//xAAbEAABBQEBAAAAAAAAAAAAAAAEAAIDBRIhQv/aAAgBAQABPwACaqKAmjJrtOzxyIoAnTvdn0v/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIT/9oACAECAQE/ANq6uBf/xAAYEQADAQEAAAAAAAAAAAAAAAAAARICA//aAAgBAwEBPwDipyy2f//Z";
const volkiharBanner = "/assets/volkihar-banner-C736rbFi.jpg";
const volkiharBookLarge = "/assets/volkihar-book-large-BpE5vkX8.png";
const volkiharBookPlaceholder = "/assets/volkihar-book-placeholder-tOpZR4Vi.png";
const volkiharBook = "/assets/volkihar-book-B73D4Zfh.png";
const volkiharEnderalLarge = "/assets/volkihar-enderal-large-T2LUjM5-.jpg";
const volkiharEnderalLogoLarge = "/assets/volkihar-enderal-logo-large-BbiR1dg4.png";
const volkiharEnderalLogoPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAADd0lEQVR4AV2R5WLlSA6Fj4psXwony3+33/+FFocnyY2pUNL4Nnd/ZqjvVEn091Pvwl1wHR/9P9/dDa4Mvfe6w8aa6mCsCeu8DBU0zNMMESwqeHlZ1+fe9/N0fo7YsA9/2YWTvx7e/eOvV51xpyp8b5y9987cb5I7R9t1u1fhaxY5AAQI1+B9fXmba3drmSOLu0iebm+vKpcbG8Jtt0l2XXcNozvD6lOpwXkXAjcdgo8RFSImC5sMY5Ou2rYVwQ37/SlruquRHo3F4+mwf7LBnYJ3OzLU9yw+xaRERmPmqWllBtUqtfQeOTPVIx/FrdN6x1Yeb2+Ofw0h/EmJrrrgjvv9fvDB9wp1cU30ch7TEiOZSFlEy7LEVkSzUS3jNDe3mW+cdfepykOX67Hvw1Xw/nDY7067w3DCxhKC1tqWaVnJuRwLp0gwqyW5gmJSY6KD0p2I3ip0xyw9LhjTe++OwYcjyIRamX0I3hrHIJ0JCLAYTIMXUGcde1db3QGuq6WabG2NqfRbep9y6Y21exD1MUYuKTG31uErROHIwDHDuVybqczJW3LWurqu2Z+3tqpICH0IBOrXmNs4zmFOiXKuKopZRGcQogoaNpywjs66lgqvZol7Y8mycppjLNt7IgLV0iimLMuWsgWPzPIior8Q8CqgCWqjY+jPqeQg3nlr7dU4rkipPHmfEogqVDM2am3xIqmNz5v0dwh+E8jrRQLh6IzqL4B1rXBYeE01+J0r9c0QzU1k8c4aVU0CvInwS078CxFedZMQ2dFbTQt8c2C8kINTMZ5ZkHM9F0OjIRpBWLBRWlug+F22UFX9TUTPF8lxGNZspxqeY7MPf+40Ntdsa7AeIKKOFTsiHFW1Z1ZWlVGBH1n034bwPzL6qyOauEulPJf2vzE1exCCbYVrP6AzxnLjzho6ADgaY3pjIAS6iP6jgv+q6I8K++r2vHySYMN8ujnsCpfUisCurBgBjKJ6huLtciVDb86bSaHr/c2hYOPT2Avu04u/AwjD0BicCGZWomdSPSmZCpVZBHNlWbxFy4lbOZeGr3D4igW27Y1JtfLZmEsTzEFELulJWEerVLiZ+owsAd9i8BWX5V0d90mh6/sWs/zGor8RzBmECGgOgfjyH77DfroZc5P3hXe9VQhaE8tQIZACOjfVV4KeucrselSOLJcx+Mgf1w6YAeGPsC8AAAAASUVORK5CYII=";
const volkiharEnderalLogo = "/assets/volkihar-enderal-logo-Bg2oXoo9.png";
const volkiharEnderalPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAC0AUAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAEBgMFBwIA/9oACAEBAAAAAMJZbuyjQM+A4heWNiZG9ZyFMrhm+Xhm3yXJ88Wa5hMhPeBVqrCqDCiST6sQT1fJzIQXEMNLD//EABgBAAMBAQAAAAAAAAAAAAAAAAIEBQMB/9oACAECEAAAAFp69VgsYlR3QV2Of//EABcBAAMBAAAAAAAAAAAAAAAAAAMEBQL/2gAIAQMQAAAAtNklKNsUZ07BzKZ//8QAIBAAAgICAwEBAQEAAAAAAAAAAAECAwQRBRIhIjETBv/aAAgBAQABPwDGyW2jFirEijCUyHFbX4X8NuD+TmuNlX2+TJqlGT8HEZJlL6tGHmqvW2Y3MVw19GFy9VrS2UVRya9pHNcL/SMvk5fh3VKXyX4zg34WR0SRVaO6URZdif6cJmSd0NyOCyqf4R7SX4cplY3WXqOanTY560ZlMG5aMmnTY4FR1UkOowrJUzTMTn7aK0lIzP8ASW2JruX8pOxvcizK7su1JFukyN+iGWRyIsrtjs/qun6XWev0nPwdnpKzws9JG2RskiF0xZE9E7ZMnNnZ7E/CZ//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEIRESEDFB/9oACAECAQE/AHJ+S17h6iZTduGlVgYeFXtLq9HUsxXezUx6SgAgWCWbEWvcC8RjxP/EABwRAAMBAQADAQAAAAAAAAAAAAABAgMRBBIhIv/aAAgBAwEBPwCEjOc2XhLn8muTljXDrMu9JuYn6zfSaZp8YtWZ+Q0X5PUVr1jfsf/Z";
const volkiharEnderal = "/assets/volkihar-enderal-BTf8JKtt.jpg";
const volkiharSlide1Large = "/assets/volkihar-slide-1-large-CkekFT3C.jpg";
const volkiharSlide1 = "/assets/volkihar-slide-1-BJOjWYAS.jpg";
const volkiharSlide2Large = "/assets/volkihar-slide-2-large-BzyjkLqK.jpg";
const volkiharSlide2 = "/assets/volkihar-slide-2-1Kh0pCzp.jpg";
const volkiharSlide3Large = "/assets/volkihar-slide-3-large-C_8CrUhH.jpg";
const volkiharSlide3 = "/assets/volkihar-slide-3-Dkb5mX5r.jpg";
const volkiharSlidePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCAAJABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgj/xAAWAQEBAQAAAAAAAAAAAAAAAAADBAL/2gAMAwEAAhADEAAAAJ5jtNMbsaRuB//EACAQAAEDAgcAAAAAAAAAAAAAAAEAAwUCEgQGESI0NYH/2gAIAQEAAT8AkYIR+CtNeoTrIafFdu1Zl4PqkuvpX//EABcRAQEBAQAAAAAAAAAAAAAAAAIAATL/2gAIAQIBAT8AOxeRh3t//8QAGBEBAQADAAAAAAAAAAAAAAAAAAIDERL/2gAIAQMBAT8A40qWRT//2Q==";
function VolkiharLogo() {
  return /* @__PURE__ */ jsxs("svg", { width: "532", height: "344", viewBox: "0 0 532 344", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M294.971 81.133c22.724 29.428 35.373 45.546 37.95 48.354 5.486 5.982 8.123 9.267 19.709 16.895 6.486 4.394 14.942 7.61 25.37 9.651V159h-54.38L261 77.977V159C191.123 68.072 153.683 20.04 148.683 14.903c-5-5.136-12.56-8.026-22.683-8.668V0l69.584.14V6c-4.38 0-7.994.587-10.845 1.762-4.275 1.761-4.42 5.768-3.412 7.141 1.4 2.138 23.229 30.34 65.487 84.609v-70.08c0-11.449-6.327-16.432-11.333-20.102-3.337-2.447-9.281-3.557-17.832-3.33V.14H289V6c-5.556-.235-13.818.235-19.896 3.33-4.052 2.063-6.753 6.857-8.103 14.382v13.29a24524.908 24524.908 0 0 0 25.533 33.194c23.526-29.352 36.705-45.71 39.538-49.074 4.481-5.32 2.935-11.023-1.577-13.119-3.007-1.397-7.648-2.178-13.922-2.342V0H373v5.661c-7.55 0-13.964 1.666-18.393 3.891-2.954 1.483-6.835 4.828-11.644 10.035l-47.992 61.546z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.3 254.75L6.05 224.1c-1.1-2.8-1.85-3.35-3.6-3.85-.75-.2-1.6-.2-1.9-.2-.3 0-.4-.15-.4-.35 0-.3.5-.35 1.3-.35 2.4 0 5.1.15 5.7.15.5 0 2.65-.15 4.55-.15.9 0 1.35.1 1.35.35 0 .25-.15.35-.5.35-.55 0-1.45.05-1.9.25-.55.25-.65.65-.65 1 0 .45.45 1.8 1 3.2l10.2 26.55c2.9-6.7 9.6-24.15 10.7-27.75.25-.75.45-1.45.45-1.9 0-.4-.15-.9-.65-1.15-.6-.2-1.35-.2-1.9-.2-.3 0-.55-.05-.55-.3 0-.3.3-.4 1.1-.4 2 0 4.3.15 4.9.15.3 0 2.45-.15 3.9-.15.55 0 .85.1.85.35 0 .25-.2.35-.6.35-.35 0-1.45 0-2.4.6-.65.45-1.4 1.3-2.75 4.7-.55 1.4-3.05 7.4-5.6 13.55-3.05 7.3-5.3 12.7-6.45 15.15-1.4 3-1.6 3.8-2.1 3.8-.6 0-.85-.7-1.8-3.1zM61 257.7c-12.25 0-17.25-9.1-17.25-16.7 0-6.65 5.15-16.6 17.5-16.6 9.9 0 17.45 5.9 17.45 15.95 0 9.55-7.05 17.35-17.7 17.35zm1.25-1.7C65.6 256 74 254.3 74 241.6c0-10.05-6.2-15.65-13.05-15.65-6.95 0-12.55 4.3-12.55 13.75 0 9.8 5.45 16.3 13.85 16.3zm33.6-18.7v7.6c0 5.75.2 8.65 1.05 9.45.8.7 1.8 1 5.25 1 2.2 0 4.2 0 5.3-1.4.5-.75.85-1.75.95-2.5.05-.4.15-.6.4-.6.2 0 .3.15.3.65s-.3 3.35-.6 4.5c-.3 1-.25 1.25-2.65 1.25-3.4 0-7.15-.25-12.15-.25-1.65 0-2.65.15-4.4.15-.5 0-.8-.1-.8-.4 0-.15.15-.3.55-.3s.8 0 1.2-.1c.85-.15 1.15-1.15 1.3-2.35.3-1.9.2-5.35.2-9.2v-7.5c0-6.6 0-7.7-.1-9.05-.1-1.4-.3-2.3-2-2.5-.3-.05-.85-.05-1.25-.05-.35 0-.55-.15-.55-.35 0-.25.25-.35.75-.35 2.1 0 5.1.15 5.2.15.7 0 3.75-.15 5.15-.15.5 0 .65.15.65.35 0 .2-.25.35-.55.35-.35 0-.85.05-1.35.1-1.4.2-1.7 1-1.8 2.45-.1 1.35-.05 2.45-.05 9.05zm29.2 0v2.35c2.3-2.05 7.75-7.25 10-9.7 2.4-2.65 2.6-2.9 2.6-3.45 0-.35-.2-.6-.8-.8-.35-.1-.55-.2-.55-.4 0-.15.1-.3.5-.3.3 0 1.8.15 3.4.15 1.5 0 4.25-.15 4.9-.15.7 0 .8.1.8.3 0 .2-.15.35-.55.4-.8.05-1.85.25-2.45.5-1.2.4-1.85.95-4.45 3.3-3.65 3.3-8 7.55-10.2 9.55 2.7 2.8 10.8 10.8 12.9 12.7 3.5 3.2 5.2 4.1 7.2 4.55.55.1.3.05 1.15.15.45.05.7.15.7.4 0 .2-.25.3-.8.3h-3.25c-3.9 0-4.9-.45-6.9-1.85-2.25-1.6-10.25-9.8-14.2-14.45v3.95c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1zm33.3 7.5v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm27-6.4h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3H185.3c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm52.2 6.55h-9.1c-.25 0-.4.15-.5.4l-2.2 6.25c-.5 1.4-.85 2.75-.85 3.55 0 .9.55 1.3 1.65 1.3h.35c.45 0 .6.15.6.35 0 .25-.4.35-.75.35-1.1 0-3.4-.15-3.95-.15-.5 0-2.7.15-4.8.15-.55 0-.8-.1-.8-.35 0-.2.2-.35.6-.35.25 0 .7 0 1-.05 2.15-.2 3-1.85 3.85-3.95l10-26.35c.55-1.45.7-1.7 1.05-1.7.25 0 .45.2 1 1.6.7 1.65 7.5 19.1 10.15 25.35 1.65 3.95 3.1 4.6 3.8 4.85.65.25 1.35.25 1.7.25.35 0 .6.1.6.35 0 .25-.2.35-.75.35-.5 0-4.25 0-7.6-.1-.95-.05-1.25-.1-1.25-.35 0-.15.15-.3.35-.35.2-.1.5-.35.2-1.1l-3.95-10.05c-.1-.15-.2-.25-.4-.25zm-8.6-1.75h8c.2 0 .2-.15.15-.3l-3.95-11.05c-.25-.7-.3-.7-.55 0l-3.75 11.05c-.1.2 0 .3.1.3zm31.15 1.6v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.45-2.1-2-2.4-.3-.05-.8-.1-1.2-.1-.35 0-.55-.1-.55-.3 0-.2.15-.35.6-.35 2.15 0 5.2.15 5.3.15.45 0 3.85-.15 5.25-.15 2.8 0 5.85.25 8.2 1.9.95.7 3 2.7 3 6.1 0 2.75-1.35 6.25-5.3 9.45 3.65 4.5 6.65 8.2 9.2 10.85 2.4 2.45 3.9 2.85 5.3 3.05.35.05 1.4.1 1.55.1.4 0 .55.15.55.35 0 .25-.2.35-.9.35h-3.5c-2.35 0-3.45-.15-4.55-.6-2.1-.9-3.6-3.15-6.2-6.5-1.95-2.4-3.95-5.1-4.8-6.15-.2-.2-.3-.3-.6-.3l-5.15-.05c-.2 0-.25.05-.25.25v.7c0 4 0 7.65.25 9.45.15 1.2.3 2.2 1.95 2.4.5.05 1.05.1 1.45.1.45 0 .65.15.65.3 0 .25-.2.4-.7.4-2.6 0-5.4-.15-5.6-.15-.8 0-3 .15-4.35.15-.5 0-.7-.1-.7-.4 0-.15.3-.3.6-.3.35 0 .7 0 1.1-.1.85-.15 1.15-.7 1.3-1.9.25-1.8.2-5.9.2-9.65zm3.85-17.55v13.6c0 .25.05.5.25.6.65.35 2.65.65 4.45.65 1.05 0 2.3-.05 3.35-.75 1.5-.95 2.5-3.15 2.5-6.35 0-5.45-2.9-8.45-7.35-8.45-1.25 0-2.3.1-2.9.25-.15.05-.3.2-.3.45zm56.85 6.6v3.2c1.55-1.5 8.35-8.65 11.4-11.8 3-3.1 3.2-3.6 3.2-4.2 0-.4-.25-.8-.65-.95-.35-.15-.45-.25-.45-.45s.3-.3.75-.3c1.45 0 1.3.15 3 .15 1.55 0 4.5-.15 5.3-.15.7 0 .85.15.85.35 0 .2-.1.3-.55.35-.95.1-1.85.3-2.55.6-1.25.5-2.2 1.1-5.2 4-4.4 4.25-10.1 9.9-11.4 11.35 3.15 3.45 12.25 12.7 14.6 14.9 4.1 3.85 5.85 4.95 8.25 5.4.45.1.95.15 1.45.15.4 0 .7.1.7.35 0 .25-.2.35-.75.35h-3.7c-4.35 0-5.5-.55-7.85-2.4-3-2.35-12-12-16.4-17.25v5.15c0 4.8 0 8.75.25 10.85.15 1.45.45 2.55 1.95 2.75.7.1 1.7.2 2 .2.45 0 .6.2.6.35 0 .25-.2.35-.75.35-2.75 0-5.9-.15-6.15-.15s-3.2.15-4.7.15c-.55 0-.8-.05-.8-.35 0-.15.1-.35.55-.35.3 0 .85-.05 1.3-.15 1-.2 1.3-1.35 1.5-2.8.25-2.1.25-6.05.25-10.85v-8.8c0-7.8 0-9.2-.1-10.8-.1-1.7-.6-2.55-1.7-2.8-.55-.15-1.45-.2-1.8-.2-.4 0-.55-.1-.55-.3 0-.3.25-.4.8-.4 1.65 0 5 .15 5.25.15s3.4-.15 4.9-.15c.55 0 .8.1.8.35 0 .2-.1.3-.55.35-.55.05-.6.05-1.1.1-1.35.15-1.75 1.15-1.85 2.9-.1 1.6-.1 3-.1 10.8zm34.15 17.05c0-23.85.05-16.15 0-24.45 0-1.55.15-2.05.55-2.05.35 0 1.2 1 1.55 1.35.45.5 7.4 7.6 14.4 14.75 3.9 3.8 8.9 8.95 10.2 10.15l-.55-20.8c-.05-2.7-.35-3.6-1.7-3.95-.85-.15-1.6-.2-1.95-.2-.5 0-.6-.2-.6-.4 0-.25.4-.3.9-.3 2.15 0 4.25.15 4.7.15.5 0 2.05-.15 4-.15.55 0 .7.05.7.3 0 .2-.15.35-.45.4-.3.05-.7.05-1.25.15-1.15.25-1.5.75-1.5 3.75l-.1 25.1c0 2.5-.1 2.75-.45 2.75s-.85-.35-3.3-2.65c-.2-.1-7.15-7-11.5-11.25-5.2-5.4-10.2-10.6-11.45-11.9l.65 19.55c.1 3.45.4 4.75 1.65 5.05.8.2 1.65.2 2.05.2.4 0 .6.15.6.35 0 .25-.25.35-.8.35-2.7 0-4.5-.15-4.85-.15-.35 0-2.2.15-4.35.15-.45 0-.75-.05-.75-.35 0-.2.2-.35.7-.35.35 0 .9 0 1.55-.2 1.1-.35 1.35-1.7 1.35-5.35zm46.3-6.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm46.95 4.15v4.5c0 2-.05 2.05-.6 2.35-2.75 1.4-6.75 1.9-9.2 1.9-3.25 0-9.55-.25-14.65-4.5-2.7-2.25-5.4-6.45-5.4-12.15 0-6.8 3.45-11.65 7.55-14.1 3.85-2.25 8.1-2.55 11.15-2.55 3.2 0 5.35.4 7.15.7.8.15 2.75.4 3.8.45.4 0 .4.2.4.4 0 .6-.35 2.1-.35 6.5 0 .7-.05.9-.4.9-.25 0-.3-.3-.35-.6 0-.45-.2-2-.95-3.1-1.15-1.65-4.75-3.5-10.35-3.5-2.7 0-5.85.1-9.2 2.65-2.55 1.95-4.2 5.75-4.2 10.7 0 5.95 3.25 10.35 4.55 11.6 3.3 3.2 7 4.65 11.35 4.65 1.4 0 3.6-.25 4.75-.85.5-.3.85-.8.85-1.5v-7.2c0-3.3-.25-3.95-2-4.2-.3-.05-.8-.1-1.2-.1-.4 0-.6-.2-.6-.35 0-.25.2-.35.75-.35 2 0 4.9.1 5.1.1.2 0 3.15-.1 4.5-.1.5 0 .7.1.7.35 0 .15-.15.35-.6.35-.35 0-.45 0-.85.05-1.2.15-1.5 1.05-1.6 2.5-.1 1.45-.1 2.7-.1 4.5zm20.6-10.55h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3h-18.15c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm50.65-11.45v17.85c0 3.85.05 7.4.25 9.25.15 1.2.25 1.9 1.5 2.2.6.15 1.55.2 1.95.2.4 0 .6.15.6.3 0 .25-.15.4-.65.4-2.55 0-5.5-.15-5.7-.15-.2 0-3.15.15-4.45.15-.55 0-.75-.1-.75-.35 0-.15.15-.35.55-.35s.7 0 1.1-.05c.95-.15 1.1-.75 1.3-2.45.2-1.8.2-5.4.2-9.15v-17.85c-1.65 0-4.3 0-6.3.05-3.2.05-3.9.55-4.6 1.6-.45.7-.65 1.3-.75 1.55-.15.35-.25.4-.45.4s-.25-.2-.25-.45c-.05-.3.7-3.6 1-4.95.15-.6.3-.8.45-.8.35 0 1.3.45 2.2.55 1.75.2 3.15.25 3.2.25h16.4c1.4 0 2.9-.1 3.6-.25.65-.15.8-.2.95-.2.2 0 .3.25.3.45 0 1.4-.1 4.7-.1 5.1 0 .45-.2.6-.35.6-.25 0-.35-.2-.35-.6 0-.15 0-.2-.05-.7-.2-2-.85-2.5-5.9-2.55-1.9 0-3.45-.05-4.9-.05z",
        fill: "var(--primary)",
        fillRule: "nonzero"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M228.5 342.162h75.55",
        stroke: "var(--primary)",
        strokeWidth: "2",
        strokeLinecap: "square"
      }
    )
  ] });
}
const textSection = "_textSection_1uaiw_1";
const logoContainer = "_logoContainer_1uaiw_7";
const armor = "_armor_1uaiw_21";
const styles$n = {
  textSection,
  logoContainer,
  armor
};
const Carousel = lazy(
  () => import("./index-BfDtreAJ.js").then((module) => ({ default: module.Carousel }))
);
const Armor = lazy(() => import("./armor-DwypDUCd.js").then((module) => ({ default: module.Armor })));
const title$5 = "Volkihar Knight";
const description$3 = "A lore-friendly armor mod for The Elder Scrolls V: Skyrim. Released on PC and Xbox One with over one million downloads across both platforms.";
const roles$2 = ["3D Modelling", "Texturing", "Graphic Design"];
const meta$d = () => {
  return baseMeta({ title: title$5, description: description$3, prefix: "Projects" });
};
function VolkiharKnight() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          srcSet: `${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`,
          width: 1280,
          height: 720,
          placeholder: volkiharBackgroundPlaceholder,
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$5,
          description: description$3,
          linkLabel: "Get the mod",
          url: "https://www.nexusmods.com/skyrimspecialedition/mods/4806/",
          roles: roles$2
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`,
          width: 800,
          height: 436,
          placeholder: volkiharBannerPlaceholder,
          alt: "A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image.",
          sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        Image$1,
        {
          srcSet: `${volkiharBook} 490w, ${volkiharBookLarge} 960w`,
          width: 480,
          height: 300,
          placeholder: volkiharBookPlaceholder,
          alt: "A book containing a sketch depicting the logo and armor",
          sizes: `(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$n.armor, children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(Armor, { alt: "3D model of the Volkihar Knight armor" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: styles$n.textSection, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Armor design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "As a player I noticed there weren’t any heavy armor options for the Volkihar faction. This kinda sucks when you’ve specialised in heavy armor and decide to join the faction and discover they all wear light armor." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "My solution was to create a mod that combines meshes from the Volkihar faction armor with heavy plate armor. The mod builds upon textures and meshes from the base game, so it unifies with Skyrim’s overall aesthetic. I combined and modified the meshes in 3DS Max. To establish a cohesive design across the set, I edited existing textures, and designed custom textures in Photoshop." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$n.logoContainer, children: /* @__PURE__ */ jsx(
          VolkiharLogo,
          {
            role: "img",
            "aria-label": "The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, noMargin: true, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Identity design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The monogram uses custom designed typography to get the right balance of weight and angularity. I combined this with Trajan for the text, which is also used for Skyrim’s game title wordmark." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
        Carousel,
        {
          placeholder: volkiharSlidePlaceholder,
          images: [
            {
              srcSet: `${volkiharSlide1} 960w, ${volkiharSlide1Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wearing the black coloured armor set."
            },
            {
              srcSet: `${volkiharSlide2} 960w, ${volkiharSlide2Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A close up of the custom gauntlets design."
            },
            {
              srcSet: `${volkiharSlide3} 960w, ${volkiharSlide3Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wielding a sword and wearing the red coloured armor."
            }
          ],
          width: 1920,
          height: 1080
        }
      ) }) }) }),
      /* @__PURE__ */ jsx(
        ProjectSection,
        {
          backgroundElement: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`,
              width: 1280,
              height: 720,
              placeholder: volkiharEnderalPlaceholder,
              alt: "A promotional image from Enderal showing several characters in the game overlooking a distant city.",
              sizes: `100vw`
            }
          ),
          children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                srcSet: `${volkiharEnderalLogo} 180w, ${volkiharEnderalLogoLarge} 360w`,
                width: 180,
                height: 200,
                placeholder: volkiharEnderalLogoPlaceholder,
                alt: "The Enderal game logo",
                sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`,
                style: { maxWidth: 220, width: "100%", marginBottom: 30 }
              }
            ),
            /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Featured in Enderal" }),
            /* @__PURE__ */ jsx(ProjectSectionText, { children: "I was super stoked to have my work featured in the major standalone mod Enderal, which won best fan creation at the game awards in 2016. Within the game my armor design can be found being used for the Wandering Mage armor set." }),
            /* @__PURE__ */ jsx(
              Button,
              {
                secondary: true,
                iconHoverShift: true,
                icon: "chevron-right",
                href: "https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/",
                children: "View on Steam"
              }
            )
          ] }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VolkiharKnight,
  meta: meta$d
}, Symbol.toStringTag, { value: "Module" }));
const infrastructure = "_infrastructure_2b220_1";
const slogan$4 = "_slogan_2b220_8";
const sloganSubtitle$4 = "_sloganSubtitle_2b220_20";
const sloganTitle$4 = "_sloganTitle_2b220_29";
const sloganDivider$2 = "_sloganDivider_2b220_38";
const mainContent$3 = "_mainContent_2b220_46";
const styles$m = {
  infrastructure,
  slogan: slogan$4,
  sloganSubtitle: sloganSubtitle$4,
  sloganTitle: sloganTitle$4,
  sloganDivider: sloganDivider$2,
  mainContent: mainContent$3
};
const data6_1 = "/assets/data6_1-DR1M7N3Q.jpg";
const data6_2 = "/assets/data6_2-DChBc9mf.jpg";
const data6_3 = "/assets/data6_3-DFNk8BjF.jpg";
const data6_4 = "/assets/data6_1-BjLtPq_I.jpg";
const data6_5 = "/assets/data6_5-C8asKjpZ.jpg";
const data6_6 = "/assets/data6_6-lqY6OZN6.jpg";
const meta$c = () => {
  return baseMeta({
    title: "Infrastructure Equality",
    description: "Developed a multi-objective optimization framework combining geospatial analysis and evolutionary algorithms to balance flood risks, infrastructure costs, and social equity.",
    prefix: "Projects"
  });
};
const Infrastructure = () => {
  const [optimizedImages, setOptimizedImages] = useState([]);
  const { theme } = useTheme();
  const originalImages = [data6_1, data6_2, data6_3, data6_4, data6_5, data6_6];
  useEffect(() => {
    const processImages = async () => {
      const processed = await Promise.all(
        originalImages.map(async (img) => {
          return {
            original: img,
            compressed: await optimizeImage(img, {
              maxWidth: 1600,
              quality: 95,
              format: "webp"
            }),
            thumbnail: await optimizeImage(img, {
              maxWidth: 300,
              quality: 90,
              format: "webp"
            })
          };
        })
      );
      setOptimizedImages(processed);
    };
    processImages();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$m.infrastructure, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$m.slogan, children: [
        /* @__PURE__ */ jsx("div", { className: styles$m.sloganSubtitle, children: "Infrastructure Equality" }),
        /* @__PURE__ */ jsx("h1", { className: styles$m.sloganTitle, children: "AI-powered urban resilience: intuitive design for stormwater challenges" }),
        /* @__PURE__ */ jsx("div", { className: styles$m.sloganDivider })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$m.mainContent, children: [
        /* @__PURE__ */ jsx("div", { className: projectStyles.projectInfo, children: /* @__PURE__ */ jsxs("section", { className: projectStyles.contentSection, children: [
          /* @__PURE__ */ jsxs("div", { className: projectStyles.contentLeft, children: [
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "Tech Stack" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Python" }),
                /* @__PURE__ */ jsx("li", { children: "NSGA-II Optimization" }),
                /* @__PURE__ */ jsx("li", { children: "ArcGIS Spatial Analysis" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `${styles$m.infoBlock} ${projectStyles.infoBlock}`, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "My Contribution" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Interface design" }),
                /* @__PURE__ */ jsx("li", { children: "Policy decision simulations" }),
                /* @__PURE__ */ jsx("li", { children: "Stakeholder usability validation" }),
                /* @__PURE__ */ jsx("li", { children: "Risk-benefit visualization" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: projectStyles.contentRight, children: /* @__PURE__ */ jsxs("div", { className: projectStyles.overviewBlock, children: [
            /* @__PURE__ */ jsx("h2", { className: projectStyles.overviewTitle, children: "Overview" }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "Traditional flood management focused only on costs, but what about fairness? I built an AI tool that helps cities balance flood risks, infrastructure budgets, and social equity - three goals that often conflict." }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: 'To simplify complex tradeoffs, I designed an interactive dashboard where policymakers visually compare scenarios through a sliding interface. For example, adjusting a "Low-Income Priority" slider instantly recalculates flood protection coverage and costs across neighborhoods. The system revealed hybrid strategies deliver more equitable results than conventional methods — all through a single streamlined workflow that turns months of debates into data-driven decisions.' })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(
          ImageCarousel,
          {
            images: optimizedImages.map((img) => ({
              src: img.original,
              compressed: img.compressed,
              thumbnail: img.thumbnail
            }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Infrastructure,
  meta: meta$c
}, Symbol.toStringTag, { value: "Module" }));
const backgroundSprLarge = "/assets/spr-background-large-nYeU3Kau.jpg";
const backgroundSprPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFCP/EABgBAQADAQAAAAAAAAAAAAAAAAMBAgQF/9oADAMBAAIQAxAAAADJ1+YyYzk2GgjwSltH/8QAHxAAAAUFAQEAAAAAAAAAAAAAAAECAwQFERITMSFh/9oACAEBAAE/AI8S7dyCqdm19D8TT0NzNasS4DqSkiVJN70x/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMRE//aAAgBAgEBPwCxOQVtlTmKtT//xAAaEQACAgMAAAAAAAAAAAAAAAAAAQMSAgQR/9oACAEDAQE/AM5uMWzxmE1hw2QtVMjiof/Z";
const imageSprBackgroundVolcanismLarge = "/assets/spr-background-volcanism-large-t0jgu3IX.jpg";
const imageSprBackgroundVolcanismPlaceholder = "/assets/spr-background-volcanism-placeholder-BMmyN9Lv.jpg";
const imageSprBackgroundVolcanism = "/assets/spr-background-volcanism-bmTr0iXr.jpg";
const backgroundSpr = "/assets/spr-background-BYcr6wKu.jpg";
const imageSprComponentsDarkLarge = "/assets/spr-components-dark-large-DDLZMiq_.png";
const imageSprComponentsDarkPlaceholder = "/assets/spr-components-dark-placeholder-CS7TACCT.png";
const imageSprComponentsDark = "/assets/spr-components-dark-C4JG7Pbq.png";
const imageSprComponentsLightLarge = "/assets/spr-components-light-large-DsBvVT1Z.png";
const imageSprComponentsLightPlaceholder = "/assets/spr-components-light-placeholder-CszPt9Ak.png";
const imageSprComponentsLight = "/assets/spr-components-light-B7eB4kK-.png";
const imageSprDesignSystemDarkLarge = "/assets/spr-design-system-dark-large-Dqc1QDG6.png";
const imageSprDesignSystemDarkPlaceholder = "/assets/spr-design-system-dark-placeholder-BnG6UVwD.png";
const imageSprDesignSystemDark = "/assets/spr-design-system-dark-m_r7zp6p.png";
const imageSprDesignSystemLightLarge = "/assets/spr-design-system-light-large-DpW3ORXR.png";
const imageSprDesignSystemLightPlaceholder = "/assets/spr-design-system-light-placeholder-rqb9V2TD.png";
const imageSprDesignSystemLight = "/assets/spr-design-system-light-BDN1DcyF.png";
const imageSprLessonBuilderDarkLarge = "/assets/spr-lesson-builder-dark-large-DZ47e5rw.jpg";
const imageSprLessonBuilderDarkPlaceholder = "/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg";
const imageSprLessonBuilderDark = "/assets/spr-lesson-builder-dark-CleNpN1U.jpg";
const imageSprLessonBuilderLightLarge = "/assets/spr-lesson-builder-light-large-BcyuLqHy.jpg";
const imageSprLessonBuilderLightPlaceholder = "/assets/spr-lesson-builder-light-placeholder-Dq8oUDzc.jpg";
const imageSprLessonBuilderLight = "/assets/spr-lesson-builder-light-UMmbA8fJ.jpg";
const videoSprMotionLarge = "/assets/spr-motion-large-3xc88jM5.mp4";
const videoSprMotionPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAUACADAREAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAABAUGAQcJ/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwUBBAYCAP/aAAwDAQACEAMQAAAA5g6JXYZPaa7bIz7iw8vkipxO215vYnFgU8PrMw2YrP/EACIQAAICAgICAgMAAAAAAAAAAAECAwUABAYRIVESExQxQf/aAAgBAQABPwCPY2b2D7piSW/fecY4hVGgeTZmQS5zCy16a0KazBwD/MquaI+l8HTKeaJ6gkessrCRvmizMB67w1bPtF3YtkahfAyKdoKvpT14yTckadvOfkP7zgmlHZXiRygspOf/xAAfEQACAwEAAQUAAAAAAAAAAAAAAgEDEQQSBSEiQVH/2gAIAQIBAT8AvvltaTo7bZsxDmtfx+RW/wBjxsYTxx5aRX7YImEn6KenUq9mMf/EAB4RAAEEAgMBAAAAAAAAAAAAAAIAAQMEERIFECIx/9oACAEDAQE/AK1dh8iqtCEYdj+q1EG2BUseFEWr5TX301dFN6ypZNkyz1yUpBG7iv/Z";
const videoSprMotion = "/assets/spr-motion-DNnC5DgY.mp4";
const imageSprSchema1DarkLarge = "/assets/spr-schema-1-dark-large-CeSqw0xT.png";
const imageSprSchema1DarkPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABeUlEQVR4AWJU1rZkAhRHHjgS2DAQ48jO//+bW4u5WHB6Qw23uBEDCapaqypJStBu7XNakWEHsmrv9cPe17Pbz/l88HsRSdAiCZCYECA8vPdcdRO4Qn8DSp/zOadbhmtULlCzgO2t8Hrvkrp+7goZwtTweN4ramJ/7n2655LnCcqD8Oc4NqJGMSKgb9UJIGyGBOxupwnne3RaqU1IItCez+n+wGinz1FTqyovD899sXuCzzndPU/geKj9jQI4XmtD4vQ7iPdLKrWSSgKQeWTn5TmlrLUq5EchBx2VPb5506iVStWqlLVGDNmKOGO4KvbtIFXFQGoTEypFrgVfpwGqilultq/fqtza6bYqWoVJQk53ztmQcOtaKwF6uUKAyVd7+uBeV0LI5ZWGymUz3FCQ4d09KP4eRXl52n0H1R3tbu//lKeKwBa6/fr6nNNE+6q8mcEct3r6o53Mvba/87x576n5E74VUvw3/i9voyQof8O8bggC4W+Y158Azxk6hkhW1QQAAAAASUVORK5CYII=";
const imageSprSchema1Dark = "/assets/spr-schema-1-dark-DrL_5NQ4.png";
const imageSprSchema1LightLarge = "/assets/spr-schema-1-light-large-CkTsXpYP.png";
const imageSprSchema1LightPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABMUlEQVR4AXyRga7dIAxD7dDvvtL97j3wqCMjtEnvCKWUOk5JuNaS1LGqSO6I/yiZHzPnBKDgfXQA2gxGAU2kD0lcbMs2qpdB9nfW+Tkbv3v/wI8TlpdcN3SqT0XWXgD/uYczjNUuOYq8dO10RBXa/vC0rokr8nrrTN/mfPOm94IZn89nK3w7tYCmdee12kPGz9NbeaVuFEhaa2X6io6tSPcRdGE/t2rs2DkyqZh4+ncmvrIkhMxjzrln+o506c/iXnNqXUiq7tzcrNkzn8ISFJpCEECIQKV9foDmYWgFrK43xsKHD0JLB0WpnYTm0vG2pZDHmXX8UuGWM2dg/O7pjTHgb9ARRnfUdgqe9fV/EXWsqpzkMq1LrQwwkJaa8f1+aYahwU3ny3iIvwH9HQwMTnUAjevehnsmuFYAAAAASUVORK5CYII=";
const imageSprSchema1Light = "/assets/spr-schema-1-light-B5dEN2xi.png";
const imageSprSchema2DarkLarge = "/assets/spr-schema-2-dark-large-WIGUIqzX.png";
const imageSprSchema2DarkPlaceholder = "/assets/spr-schema-2-dark-placeholder-BVZ4WW8t.png";
const imageSprSchema2Dark = "/assets/spr-schema-2-dark-DYmNi06o.png";
const imageSprSchema2LightLarge = "/assets/spr-schema-2-light-large-h4BJSsho.png";
const imageSprSchema2LightPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABAElEQVR4AYyTgYrEMAhEVfPf/e7e0cxlHTqIALePrEgyGjVb33sDeJ7nOFa4exReWBHndxS/xX3fP8XxT6QJ6gAoE5Mpn06XIrgbRWYea40FYBeMO7aXpatCEdIRE9IJ5mbvIyBGfQRgevkWACRqlUH77seOfgtOtAaU2l869oIi6mh5FMqh2QozvMsCxfsM6YX8OZd271lBt7O6CB7bDbHhvj8GKjpap4oIzWbmY5vmdWt4RkkboRd76sn8LIO/4GVpZpqOb99mEvEPtvo/gI6syMyQjlI5RAGBwv4jvPhW1z+LjrLkdV2cbjaG9GNHp6MMfVaj04n2Dd/xt+GiDgBUWvviH6BKngAAAABJRU5ErkJggg==";
const imageSprSchema2Light = "/assets/spr-schema-2-light-B53tZDTp.png";
const imageSprStoryboarderDarkLarge = "/assets/spr-storyboarder-dark-large-CILuJaRq.png";
const imageSprStoryboarderDarkPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAMAAADbT899AAABp1BMVEUYIS0eJzMcJTAaIy8hKjYfKTUxOUMmLjkiKzczPEgnMDsdJjI8Q0wkLDhiaHFOVV0vN0ItNkIjLDh5foZESkozO0YqNkU3PkInMT4fLDp9golzeYBxd31GTVdASFE2P0suOUcrMz4lLTklLDUhKjSIjJGPkpB/hIx9gYV8gYJ3e4GGiHtmbHJfZnBOV2FKUVxFTFZES1VQVlJNUlE3PkcxOUUtNT4wNzwqMjsnLzcjKzMfJzGipZ2GiomSlIh2fIVtdoBwdXtpb3dnbXVVY3JhZm1YXmZna2NUWmFBT19dYVw6SFcxOkcqNkQvNj8lMD0qMTianZePlJaLkJaCiI+TlY15g42YmoqLjomCh4lueYZyeoSDhoB7f39ncHt2eXhrcXiChXdia3Vzd3R9gXNscXJaY2xtcWtpbWlvc2ZVXGVSV1snQVpWXFlIUFlKUFcwPEo/RUY7QUYiM0U1PD8zOz4qMT0iLjyhpJiWmJGIi356fXd5fHBzd2teY2srTGtNW2pjZ15bX15gZF1HTVM1RFMqPE86Qk4lOk5KUE1CSE0gMEAyOT5Z62yvAAACBUlEQVQoz1WOZXfiUBRFHwkhBoEECKS4uxdvgeIOU/dO3d3G3Wd+9Ly0i7Xa8+mst/e794KPJz94Pc4R0mchOOouJUta+R44+XU9sEsxTPI0GIYR+J0q2bXy4PqvIED+XKBpGiMoVkuSViAIBIfjuF3BKcRwdtgJqGPEgCUtli6As2wyktTKVLKHaGFX6e8F4V7PdkktCwhKJTcplZGYORY1maLRiNh/Xlh5nu+xrI0CkDeDU8aXtQ+1GsOEQmXYQ+FWq9P5ftHT26XANn4eXHJPu/xTRoPfbzB4XK7Z4la1Wv3U6lgHUhqo5Mcb7omJF5M+r3dsTK2enZme8ZRKy8vrexGLHkNAX368PfdKFERuMKo9nrFiaWV+fmUrDAUU9K/i+28WFgqraz6v2lhmgpVKkAmtF9UGJmyhJChI6TTt9zubm2/XJl1L/vJe/agZVirrTIU5iiZxGgUZaMTbXxsHG4tut2+3rjyLmeVys+nMZCYpeALA8cw/3aUm8WV78fXc6m7z3Cwfl7GqpFaWopwICgBHOB3ZYfoqcRAoFAL7p98gt+EKBXyXiBxgEhpB8o60pv0uENhpxP9ATkklCIKgEMPQoobms7rE58PDxqlG18/ghPh3lMeKOoc6TSL++/I2kx3NHgnIg4Dkhumbm9t0NgdXjvhoxaORzzkcjlwern6KwX+M/FwerB/Y+wAAAABJRU5ErkJggg==";
const imageSprStoryboarderDark = "/assets/spr-storyboarder-dark-BuwX6fEO.png";
const imageSprStoryboarderLightLarge = "/assets/spr-storyboarder-light-large-Cs7Lwjrs.png";
const imageSprStoryboarderLightPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAMAAADbT899AAABEVBMVEXz9PT19fby8vLy8vTx8vT29/jw8fPv8PHz9Pbx8/Xt7/H19e309PHt7u/q7O3s7e7l5uj19fTo6+708+vi4uP189/6+vr4+Pnr7/P19fLx8fH29vD19OXh4eDu8fXq6uzo6evm6Orr6ujn5+jx8Obt7Obk5OXg4uXn5uLn7fPq7fDm6/Dm6ezv7uXy8OHy8N3e3d3V2Nv5+fb09PP29evl5+rd4+n29efi5Of08uP39/bq8PXi7PPh6fDu7u7c5u7v7+zx8Ovg5uvu7erz8ujY4ejm5uXd4eTW3ePq6eHf3t3Z6fXC3fT4+PPo7PDx8e3f5+3q6OXd3uDt7N/Y3N/Q1tva2tjIzdCl0fTT5fPa3uJN/EehAAAB4ElEQVQoz12Q53LiQAyAZXuzaxtcsM0FTHEvdAi9EwgtvV7u7v0f5NYwmcnk+7Mr6dNII/hzfzflmYsfMKBEnc/Pj70G939nOYzYnxBZfe103kca3M2mZcRxLMcixCL6cAkIi1Y/ika2AtNyGSd5FmGCMTqXEcZiVXP6jiUBL9CI9ppEUiSRIA6AZsq5XKWqabIiAQMsISYdqtieLUuY43lBKOcqlVqtpsmyQgVzsSCmuXDDkqHKhAo8rc/my+d5rSqJkGFXbrBZrdzd7e+24SmE43CuMl8ut9t1vSqKMEk/NRq+7wcxFUqqLBFMco/Pg+3hMKhXMYZJXvebzbEfvJRu6QzbUhT5sbYeHD46e0fCCK4KerPVajUbwUsYhqoXqqrq1NeDf533yBYRFR56xWw2O7653rjuzgsNw4jUer0/2kd9mQgC/Loq9IrF4lDXrzdBHBvtdvt15Gia5diyiE7CQyGlpyi63zge41KpZHiyJIrJ1QSgwuUkk88X0gX9Ztx8ezvG8c6zJHpRxAnA80CFCyaTKDpdpdVqBK6liPSezImzcMEwmW7ha9cn0+QAmDPAfQmZfKo3HBaHqXQaAGj/dyH5QDedSsjTeoZhqHJagENwSQWgUCOhC98QBET+A7EgPbhEF+2BAAAAAElFTkSuQmCC";
const imageSprStoryboarderLight = "/assets/spr-storyboarder-light-DqGEXS8o.png";
const container$1 = "_container_vdycn_2";
const options = "_options_vdycn_6";
const button$2 = "_button_vdycn_26";
const indicator = "_indicator_vdycn_67";
const styles$l = {
  container: container$1,
  options,
  button: button$2,
  indicator
};
const SegmentedControlContext = createContext({});
const SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label: label2,
  ...props
}) => {
  const id = useId();
  const labelId = `${id}segmented-control-label`;
  const optionRefs = useRef([]);
  const [indicator2, setIndicator] = useState();
  const handleKeyDown = (event) => {
    const { length } = optionRefs.current;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      onChange(prevIndex);
      optionRefs.current[prevIndex].current.focus();
    } else if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      onChange(nextIndex);
      optionRefs.current[nextIndex].current.focus();
    }
  };
  const registerOption = useCallback((optionRef) => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []);
  const unRegisterOption = useCallback((optionRef) => {
    optionRefs.current = optionRefs.current.filter((ref) => ref !== optionRef);
  }, []);
  useEffect(() => {
    var _a;
    const currentOption = (_a = optionRefs.current[currentIndex]) == null ? void 0 : _a.current;
    const resizeObserver = new ResizeObserver(() => {
      const rect = currentOption == null ? void 0 : currentOption.getBoundingClientRect();
      const left = currentOption == null ? void 0 : currentOption.offsetLeft;
      setIndicator({ width: rect == null ? void 0 : rect.width, left });
    });
    resizeObserver.observe(currentOption);
    return () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]);
  return /* @__PURE__ */ jsx(
    SegmentedControlContext.Provider,
    {
      value: { optionRefs, currentIndex, onChange, registerOption, unRegisterOption },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles$l.container,
          role: "radiogroup",
          tabIndex: "0",
          "aria-labelledby": labelId,
          onKeyDown: handleKeyDown,
          ...props,
          children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { as: "label", id: labelId, children: label2 }),
            /* @__PURE__ */ jsxs("div", { className: styles$l.options, children: [
              !!indicator2 && /* @__PURE__ */ jsx(
                "div",
                {
                  className: styles$l.indicator,
                  "data-last": currentIndex === optionRefs.current.length - 1,
                  style: cssProps(indicator2)
                }
              ),
              children
            ] })
          ]
        }
      )
    }
  );
};
const SegmentedControlOption = ({ children, ...props }) => {
  const { optionRefs, currentIndex, onChange, registerOption, unRegisterOption } = useContext(SegmentedControlContext);
  const optionRef = useRef();
  const index2 = optionRefs.current.indexOf(optionRef);
  const isSelected = currentIndex === index2;
  useEffect(() => {
    registerOption(optionRef);
    return () => {
      unRegisterOption(optionRef);
    };
  }, [registerOption, unRegisterOption]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: styles$l.button,
      tabIndex: isSelected ? 0 : -1,
      role: "radio",
      "aria-checked": isSelected,
      onClick: () => onChange(index2),
      ref: optionRef,
      ...props,
      children
    }
  );
};
const video = "_video_so4tl_1";
const sidebarImages$1 = "_sidebarImages_so4tl_13";
const sidebarImage$1 = "_sidebarImage_so4tl_13";
const styles$k = {
  video,
  sidebarImages: sidebarImages$1,
  sidebarImage: sidebarImage$1
};
const Earth = lazy(() => import("./earth-CBsG7pmq.js").then((module) => ({ default: module.Earth })));
const EarthSection = lazy(
  () => import("./earth-CBsG7pmq.js").then((module) => ({ default: module.EarthSection }))
);
const title$4 = "Designing the future of education";
const description$2 = "I worked as the design lead on a major iteration of Smart Sparrow’s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.";
const roles$1 = [
  "Art Direction",
  "UX and UI Design",
  "Front End Development",
  "Motion Design"
];
const meta$b = () => {
  return baseMeta({ title: title$4, description: description$2, prefix: "Projects" });
};
const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const themes2 = ["dark", "light"];
  const handleThemeChange = (index2) => {
    toggleTheme(themes2[index2]);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          opacity: isDark ? 0.5 : 0.8,
          src: backgroundSpr,
          srcSet: `${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`,
          placeholder: backgroundSprPlaceholder
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$4,
          description: description$2,
          url: "https://www.smartsparrow.com/",
          roles: roles$1
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          raised: true,
          srcSet: isDark ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w` : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: isDark ? imageSprLessonBuilderDarkPlaceholder : imageSprLessonBuilderLightPlaceholder,
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`,
          alt: "The aero lesson builder app dragging an audio component into a screen about plant cells."
        },
        theme
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The problem" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "In 2017, Smart Sparrow began a project to build an entirely new platform to from the ground up to serve as the most powerful tool for educators to create online learning experiences. The old platform was built in Flash, and there were a number of user experience problems to solve in the process of moving the platform to Javascript. The primary goals for the project were reducing barriers to collaboration, and making the platform both easier for new users, but with plenty of room to scale for advanced users." })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: isDark, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: isDark ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w` : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`,
            width: 1024,
            hright: 800,
            placeholder: isDark ? imageSprComponentsDarkPlaceholder : imageSprComponentsLightPlaceholder,
            alt: `A set of ${theme} themed components for the aero design system`,
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
          SegmentedControl,
          {
            currentIndex: themes2.indexOf(theme),
            onChange: handleThemeChange,
            children: [
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Dark theme" }),
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Light theme" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The aero design system" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "To streamline the design process across designers and engineers for such a large project, it was important to lay the foundations with a strong, flexible design system that could evolve during the product’s development cycle. This would inform both the aesthetics and user experience across the product itself as well as the website and marketing material." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            raised: true,
            srcSet: isDark ? `${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDarkLarge} 2560w` : `${imageSprDesignSystemLight} 1280w, ${imageSprDesignSystemLightLarge} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? imageSprDesignSystemDarkPlaceholder : imageSprDesignSystemLightPlaceholder,
            alt: "The homepage of the aero design system docs website linking to principles and components.",
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Design system docs" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A design system is useless if no one knows how to use it, so we put together a comprehensive documentation website to cover principles, ux, accessibility, and component guidelines for designers and engineers working with the system." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ThemeProvider, { theme: "dark", "data-invert": true, children: /* @__PURE__ */ jsx(
        ProjectSection,
        {
          backgroundOverlayOpacity: 0.5,
          backgroundElement: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`,
              width: 1280,
              height: 900,
              placeholder: imageSprBackgroundVolcanismPlaceholder,
              alt: "A dramatic ocean scene with lava forming a new land mass.",
              sizes: "100vw"
            }
          ),
          children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { width: "full", children: [
            /* @__PURE__ */ jsx(ProjectSectionContent, { width: "full", children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "s", children: [
              /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Motion design" }),
              /* @__PURE__ */ jsx(ProjectSectionText, { children: "Animation was a core principle in making the authoring experience a more understandable process. Elements animate in ways that indicate the cause and effect of each interaction to improve the fluidity of the overall experience." })
            ] }) }),
            /* @__PURE__ */ jsx(
              Image$1,
              {
                raised: true,
                className: styles$k.video,
                srcSet: `${videoSprMotion} 1280w, ${videoSprMotionLarge} 2560w`,
                width: 1280,
                height: 800,
                placeholder: videoSprMotionPlaceholder,
                alt: "A learning designer building and deploying an interactive lesson on volcanism using the app.",
                sizes: `(max-width: ${media.mobile}px) 100vw, 50vw`
              }
            )
          ] })
        }
      ) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Encouraging adaptivity" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A major part of solving for collaboration was being able to visualize the learner experience in the editor. This was especially beneficial for subject matter experts and instructors need to review and give feedback on the higher level structure without having to dig through all of the adaptivity scenarios screen by screen." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            raised: true,
            srcSet: isDark ? `${imageSprStoryboarderDark} 1280w, ${imageSprStoryboarderDarkLarge} 2560w` : `${imageSprStoryboarderLight} 1280w, ${imageSprStoryboarderLightLarge} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? imageSprStoryboarderDarkPlaceholder : imageSprStoryboarderLightPlaceholder,
            alt: "A drag and drop storyboard style editor for creating an adaptive lesson.",
            sizes: `(max-width: ${media.mobile}px) 100vw, 80vw`
          },
          theme
        )
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { children: [
        /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "An extensible plugin ecosystem usable by everyone" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The most powerful aspect of the platform is the ability to create custom plugins for any content, whether it be a degree, course, lesson, screen, or interactive component. Out of the box these can be made configurable with minimal effort from developers. Learning designers can then edit everything using a common configuration interface." })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: styles$k.sidebarImages, children: [
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$k.sidebarImage,
              srcSet: isDark ? `${imageSprSchema2Dark} 260w, ${imageSprSchema2DarkLarge} 520w` : `${imageSprSchema2Light} 260w, ${imageSprSchema2LightLarge} 520w`,
              width: 260,
              height: 660,
              placeholder: isDark ? imageSprSchema2DarkPlaceholder : imageSprSchema2LightPlaceholder,
              alt: "Configuration options for a component.",
              sizes: `(max-width: ${media.mobile}px) 50vw, 25vw`
            }
          ),
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$k.sidebarImage,
              srcSet: isDark ? `${imageSprSchema1Dark} 260w, ${imageSprSchema1DarkLarge} 520w` : `${imageSprSchema1Light} 260w, ${imageSprSchema1LightLarge} 520w`,
              width: 260,
              height: 660,
              placeholder: isDark ? imageSprSchema1DarkPlaceholder : imageSprSchema1LightPlaceholder,
              alt: "Configuration options for text.",
              sizes: `(max-width: ${media.mobile}px) 50vw, 25vw`
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ThemeProvider, { theme: "dark", "data-invert": true, children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsxs(
        Earth,
        {
          className: styles$k.earth,
          hideMeshes: useMemo(
            () => ["Atmosphere", "EarthPartial", "Chunk", "EarthFull"],
            []
          ),
          position: useMemo(() => [0, 0, 0], []),
          labels: useMemo(
            () => [
              {
                position: [0.54, 0.19, 0.18],
                text: "Pacific ring of fire",
                hidden: true
              },
              {
                position: [0.47, -0.38, 0.04],
                text: "Ruapehu",
                hidden: true
              },
              {
                position: [0.22, 0.44, -0.35],
                text: "St. Helens",
                hidden: true
              },
              {
                position: [0.16, -0.06, 0.58],
                text: "Krakatoa",
                hidden: true
              },
              {
                position: [0.11, 0.2, -0.56],
                text: "Parícutin",
                hidden: true
              },
              {
                position: [0.52, 0.2, -0.23],
                text: "Kīlauea",
                hidden: true
              },
              {
                position: [-0.24, 0.75, 0.24],
                text: "Mantle",
                delay: 800,
                hidden: true
              },
              {
                position: [-0.24, 0.55, 0.24],
                text: "Outer core",
                delay: 800,
                hidden: true
              },
              {
                position: [-0.24, 0.35, 0.24],
                text: "Inner core",
                delay: 800,
                hidden: true
              }
            ],
            []
          ),
          scale: 0.6,
          children: [
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                scrim: true,
                animations: ["0:loop"],
                camera: [0, 0, 1.5],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Next-generation learning experiences" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "The flexibility of the product allowed for developers to create engaging interactive experiences as highly configurable plugins that could then be used and manipulated by learning designers." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [0, 0, 2.4],
                meshes: ["Atmosphere", "EarthFull"]
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.14, -1.39, 0.94],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Bringing 3D into learning" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "One really cool example is the 3D screen plugin. Learning designers can load any model into it and then configure camera positions to animate to for each section." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.17, 0.69, -1.47],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Parícutin",
                  "Kīlauea"
                ],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "start", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Interactivity" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "Learners can then be directed to specific parts of the model and shown labels. They’re also able to click and drag to orbit around and freely explore at any time." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.81, 0.51, 0.43],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Parícutin",
                  "Kīlauea"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["EarthPartial", "Chunk"],
                labels: ["Mantle", "Outer core", "Inner core"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Animation" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "Learning designers can pick an animation included in the model to play or loop for any section without having to use any complex animation tools." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                scrimReverse: true,
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["Atmosphere", "EarthFull"]
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "141",
            height: "43",
            viewBox: "0 0 141 43",
            fill: "currentColor",
            style: { marginBottom: "2em" },
            children: [
              /* @__PURE__ */ jsx("path", { d: "M87.92 30.05a.3.3 0 0 0-.34-.18l-.04.02c-.42.08-.74.06-.97-.1-.32-.2-.47-.69-.47-1.47V21.3c0-2.75-1.66-4.14-4.94-4.14-2.93 0-5.23 1.37-5.23 3.12 0 .9.55 1.55 1.37 1.64a1.7 1.7 0 0 0 1.42-.56c.72-.75.63-1.64-.25-2.6a3.52 3.52 0 0 1 2.48-.85c1.7 0 2.43 1 2.43 3.33v1.78c-.4.12-.77.24-1.45.4a18.9 18.9 0 0 0-4.7 1.52 3.19 3.19 0 0 0-1.78 2.99c0 1.46.98 3.17 3.73 3.17 1.54 0 2.92-.72 4.33-2.26.12 1.6.74 2.2 2.24 2.2.72 0 1.3-.16 1.98-.49a.4.4 0 0 0 .2-.49Zm-4.54-2.15c-.33.46-1.42 1.83-2.78 1.83-1.84 0-2.23-1.27-2.23-2.34 0-1.75 1.37-2.57 5.01-3.46v3.97Zm35.23 3.25c-3.9 0-6.83-3-6.83-7 0-3.9 3.06-7.09 6.83-7.09 3.81 0 6.8 3.06 6.8 6.98 0 4.4-3.53 7.11-6.8 7.11Zm-.15-13.34c-1.68 0-3.61.72-3.61 6.28 0 4.25 1.27 6.31 3.88 6.31 2.5 0 3.61-1.94 3.61-6.3 0-4.23-1.27-6.29-3.88-6.29Zm-60.06-.5c0 3.24-.8 5.02-4.94 5.02h-2.2v-9.78h2.29c4.28 0 4.85 2.4 4.85 4.76Zm-7.14 11.01v-5.09h1.99c2.96 0 5.22-.61 6.7-1.83a5.06 5.06 0 0 0 1.88-4.03c0-4.65-4.55-5.63-8.37-5.63h.01-7.74a.32.32 0 0 0-.32.31v.03-.01c0 .16.1.3.25.36.69.25 2.56-.1 2.56 1.88v14.01c0 1.02-.46 1.74-2.55 1.94a.31.31 0 0 0-.3.3v.06c0 .17.15.3.33.3h8.27c.18 0 .32-.13.32-.3v-.05a.3.3 0 0 0-.3-.3c-2.27-.19-2.73-.88-2.73-1.95v-5.08 5.08ZM68.1 17.06c-3.6 0-6.53 3.21-6.53 7.17 0 4 2.75 6.9 6.53 6.9 3.18 0 4.73-1.87 5.62-3.28a.31.31 0 0 0-.09-.42l-.04-.03a.32.32 0 0 0-.44.07c-1.17 1.44-2.19 2.28-3.96 2.28-2.23 0-4.62-1.52-4.62-5.79v-.71h9.15c.03 0 .05-.02.05-.05v-.07a5.72 5.72 0 0 0-1.4-4.42 5.67 5.67 0 0 0-4.27-1.65Zm-3.47 5.29c.3-2.92 1.45-4.52 3.26-4.52.91 0 1.58.25 2.06.76.65.7.93 1.96.82 3.76h-6.14Zm41.39.15c-2.5-.69-3.48-1.39-3.48-2.5 0-1.26 1.01-2.17 2.4-2.17 1.65 0 2.36.77 4.1 3.64l.01.03.03.03h.25c.18 0 .32-.14.32-.32v-4.1c0-.03-.02-.05-.02-.05h-.34c-.1 0-.19.04-.25.11l-.55.66a6.64 6.64 0 0 0-2.98-.77c-2.87 0-4.88 1.75-4.88 4.25 0 2.36 1.58 3.24 4.31 3.97 2.66.71 3.6 1.46 3.6 2.85 0 1.54-1.51 2.23-2.59 2.23-2 0-2.84-.73-4.76-4.13l-.02-.04-.02-.02h-.26a.32.32 0 0 0-.32.31v4.6c0 .03.02.06.05.06h.32c.09 0 .17-.04.23-.1l.87-.86c1.03.63 2.56.96 3.56.96 1.5 0 2.72-.47 3.55-1.36a4.54 4.54 0 0 0 1.15-3.14c0-2.14-1.16-3.26-4.28-4.14Zm-15.14 6.78c0 .7-.18.94-1.33 1.01a.32.32 0 0 0-.3.31c0 .18.15.31.32.31h5.66a.3.3 0 0 0 .31-.3c0-.17-.13-.3-.3-.31-1.3-.07-1.65-.28-1.65-1.02v-8.2c.94-1.52 1.6-2.32 2.74-2.56-.06.2-.1.42-.1.6 0 1 .7 1.7 1.72 1.7.99 0 1.68-.7 1.68-1.7 0-.93-.6-2.03-2.28-2.03-1.37 0-2.69.78-3.82 2.64v-2.1a.39.39 0 0 0-.4-.39l-3.56.1a.3.3 0 0 0-.3.3v.05c0 .16.1.3.26.31 1.19.17 1.35.73 1.35 1.3v9.98Zm39.15-12.05c.08 0 .16.04.22.1.06.05.1.13.1.22v2.33s1.17-2.74 4.94-2.74h.04c2.35 0 3.7 1.48 3.7 4.06v8.06c0 .71.18.95 1.32 1.02.17 0 .3.14.3.31 0 .17-.14.31-.32.31h-5.08a.32.32 0 0 1-.03-.63c.92-.08 1.07-.3 1.07-1v-7.29c0-2.4-.7-3.33-2.47-3.33-1.2 0-2.19 1.03-2.8 1.9 0 0-.31.38-.65 1.12l.03 7.6c0 .7.15.92 1.05 1a.32.32 0 0 1-.03.63h-5.06a.32.32 0 0 1-.31-.31c0-.17.13-.3.3-.31 1.14-.08 1.32-.3 1.32-1.02v-9.95c0-.58-.16-1.14-1.36-1.31a.31.31 0 0 1-.26-.31v-.05c0-.17.13-.3.3-.31l3.68-.1Z" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M35.47 30.82c6.24-11.43 4.15-22.73-4.81-27.77C20.76-2.5 7.84.52 2.28 12.46c-3.84 8.2-2.1 22.48 6.82 27.6 8.92 5.1 20.9.81 26.37-9.23Zm-3.02-12.15c.3-2.3-.24-5.1-2-6.95l-.02-.02c-3.38-3.76-8.06-4-11.02-3.92a16.61 16.61 0 0 0-7.55 2.14c-1.68.86-3.2 2.35-3.81 3.08-.4.47-1.06 1.44-.7 2.31.29.73 1.4.68 1.81.37.22-.16.45-.37.7-.6l.72-.64c2.53-2.07 4.78-3.37 10-3.37 5.23 0 8.06 3.22 8.06 6.09 0 2.87-1.38 4.82-3.97 6.09a10.54 10.54 0 0 1-4.4 1.18c.13-2.78.2-5.41.2-5.41 0-.33.02-.65.03-.96.07-1.55.12-2.72-1.01-2.94-1.36-.27-3.86 0-3.9 1.52-.06-.23.25 12.51.31 12.77l.02.29c.03.32.15.6.35.83a1.38 1.38 0 0 0 .98.41c.28 0 .68-.05 1.09-.16.5-.15 1.02-.39 1.31-.77.15-.2.27-.38.34-.72.04-.24.13-1.72.15-2.15 2.75-.02 5.54-.53 7.67-1.8 2.68-1.62 4.29-4.04 4.64-6.67ZM18.23 32.41a2.12 2.12 0 0 1 1.69 1.99c0 .52-.22.99-.63 1.32-.35.28-.8.43-1.3.43h-.01c-.23 0-.46-.03-.69-.1-.39-.1-.7-.29-.9-.52-.19-.22-.31-.5-.37-.83-.08-.5.05-1.04.36-1.48a1.9 1.9 0 0 1 1.53-.84c.1 0 .22 0 .32.03Z"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project outcomes" }),
        /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
          "Ultimately the project was successful after Smart Sparrow and the aero platform were",
          " ",
          /* @__PURE__ */ jsx(Link, { href: "https://www.prnewswire.com/news-releases/pearson-acquires-interactive-learning-technology-from-smart-sparrow-300987673.html", children: "acquired by Pearson in 2020" }),
          " ",
          "to become a foundation for their next generation learning platform."
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SmartSparrow,
  meta: meta$b
}, Symbol.toStringTag, { value: "Module" }));
const bikeSharing = "_bikeSharing_10g2k_1";
const slogan$3 = "_slogan_10g2k_8";
const sloganSubtitle$3 = "_sloganSubtitle_10g2k_20";
const sloganTitle$3 = "_sloganTitle_10g2k_29";
const sloganDivider$1 = "_sloganDivider_10g2k_38";
const mainContent$2 = "_mainContent_10g2k_46";
const styles$j = {
  bikeSharing,
  slogan: slogan$3,
  sloganSubtitle: sloganSubtitle$3,
  sloganTitle: sloganTitle$3,
  sloganDivider: sloganDivider$1,
  mainContent: mainContent$2
};
const bikelogo = "/assets/bikelogo-2KHHxQ11.jpg";
const data5_1 = "/assets/data5_1-Bc02nUBQ.jpg";
const data5_2 = "/assets/data5_2-jN2XLLyL.jpg";
const data5_3 = "/assets/data5_2-oC_v5bIC.jpg";
const data5_4 = "/assets/data5_4-DGkxgHh9.jpg";
const data5_5 = "/assets/data5_5-CigD_tUS.jpg";
const meta$a = () => {
  return baseMeta({
    title: "Bike-Sharing in Epidemic Era",
    description: "Created an explainable AI model using SHAP values to decode how pandemic policies and weather impacted urban mobility.",
    prefix: "Projects"
  });
};
const BikeSharing = () => {
  const [optimizedImages, setOptimizedImages] = useState([]);
  const { theme } = useTheme();
  const originalImages = [data5_1, data5_2, data5_3, data5_4, data5_5];
  useEffect(() => {
    const processImages = async () => {
      const processed = await Promise.all(
        originalImages.map(async (img) => {
          return {
            original: img,
            compressed: await optimizeImage(img, {
              maxWidth: 1600,
              quality: 95,
              format: "webp"
            }),
            thumbnail: await optimizeImage(img, {
              maxWidth: 300,
              quality: 90,
              format: "webp"
            })
          };
        })
      );
      setOptimizedImages(processed);
    };
    processImages();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$j.bikeSharing, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$j.slogan, children: [
        /* @__PURE__ */ jsx("div", { className: styles$j.sloganSubtitle, children: "Bike-Sharing in Epidemic Era" }),
        /* @__PURE__ */ jsx("h1", { className: styles$j.sloganTitle, children: "Citi Bike's Secret Weapon: SHAP Explains Your Lockdown Ride" }),
        /* @__PURE__ */ jsx("div", { className: styles$j.sloganDivider })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$j.mainContent, children: [
        /* @__PURE__ */ jsx("div", { className: projectStyles.projectInfo, children: /* @__PURE__ */ jsxs("section", { className: projectStyles.contentSection, children: [
          /* @__PURE__ */ jsxs("div", { className: projectStyles.contentLeft, children: [
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "Team" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Yecheng Zhang, Zixuan Wang" }),
                /* @__PURE__ */ jsx("li", { children: "Wenya Xu, Wen Wen" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "My Contribution" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Data-based storytelling" }),
                /* @__PURE__ */ jsx("li", { children: "Causality explanation design" }),
                /* @__PURE__ */ jsx("li", { children: "Pandemic impact visualization" }),
                /* @__PURE__ */ jsx("li", { children: "Cross-department model alignment" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: projectStyles.contentRight, children: /* @__PURE__ */ jsxs("div", { className: projectStyles.overviewBlock, children: [
            /* @__PURE__ */ jsx("h2", { className: projectStyles.overviewTitle, children: "Overview" }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "During lockdowns, I kept wondering - why were some bike stations still busy while others emptied? The data had answers, but needed translation." }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "I led the visualization layer of a machine learning system that decodes pandemic impacts on urban mobility. Using SHAP values, my heatmaps and interactive modules let users click any station to see exactly why ridership changed. Now urban planners can stop guessing and start data-talking with citizens." })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(
          ImageCarousel,
          {
            images: optimizedImages.map((img) => ({
              src: img.original,
              compressed: img.compressed,
              thumbnail: img.thumbnail
            }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BikeSharing,
  meta: meta$a
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "Hello world: how I built this site",
  "abstract": "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
  "date": "2022-04-21",
  "banner": "/static/hello-world-banner.jpg"
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h2, {
      id: "how-it-all-started",
      children: "How it all started"
    }), "\n", jsxs(_components.p, {
      children: [`Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold katakana lettering on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my `, jsx(_components.a, {
        href: "/404",
        children: "404 page"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/inspiration.png",
        alt: "A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect",
        width: "1495",
        height: "1418"
      })
    }), "\n", jsx(_components.h2, {
      id: "the-first-iteration",
      children: "The first iteration"
    }), "\n", jsx(_components.p, {
      children: "I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship."
    }), "\n", jsx(_components.p, {
      children: "The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage."
    }), "\n", jsxs(_components.p, {
      children: ["Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the ", jsx(_components.a, {
        href: "https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D",
        children: "Clay Mockups 3D Figma plugin"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/clay-mockups.png",
        alt: "Thumbnail for my Clay Mockups 3D plugin",
        width: "1920",
        height: "960"
      })
    }), "\n", jsx(_components.h2, {
      id: "migrating-to-nextjs",
      children: "Migrating to Next.js"
    }), "\n", jsx(_components.p, {
      children: "With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future."
      }), "\n", jsx(_components.li, {
        children: "Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts."
      }), "\n", jsxs(_components.li, {
        children: ["For generating pages from ", jsx(_components.code, {
          children: ".mdx"
        }), " files, I'm using Kent C Dodds' ", jsx(_components.a, {
          href: "https://github.com/kentcdodds/mdx-bundler",
          children: "mdx-bundler"
        }), ". In combination with Next.js it makes generating pages from ", jsx(_components.code, {
          children: ".mdx"
        }), " files really quick and simple."]
      }), "\n", jsx(_components.li, {
        children: "For animation I've moved from Tween.js and React Transition Group to just Framer Motion."
      }), "\n", jsxs(_components.li, {
        children: ["3D effects are still all using Three.js, but I've added ", jsx(_components.code, {
          children: "three-stdlib"
        }), " as a better maintained replacement for modules from Three's examples."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "not-all-smooth-sailing",
      children: "Not all smooth sailing"
    }), "\n", jsx(_components.p, {
      children: "For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:"
    }), "\n", jsx(_components.h3, {
      id: "1-route-transitions",
      children: "1. Route transitions"
    }), "\n", jsxs(_components.p, {
      children: ["There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of ", jsx(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464",
        children: "the most commented and reacted to issues"
      }), " on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a ", jsx(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464#issuecomment-796430107",
        children: "hack to fix things"
      }), " from the issue's comments."]
    }), "\n", jsx(_components.h3, {
      id: "2-scroll-restoration",
      children: "2. Scroll restoration"
    }), "\n", jsx(_components.p, {
      children: "Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility."
    }), "\n", jsx(_components.h2, {
      id: "looking-back-and-forward",
      children: "Looking back, and forward"
    }), "\n", jsx(_components.p, {
      children: "It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it."
    }), "\n", jsx(_components.p, {
      children: "I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today."
    }), "\n", jsx(_components.h2, {
      id: "update-feb-2024",
      children: "Update: Feb 2024"
    }), "\n", jsxs(_components.p, {
      children: [`I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the `, jsx(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",
        children: "CSS view transitions API"
      }), " to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do."]
    }), "\n", jsx(_components.p, {
      children: "Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year."
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const adaptiveUI = "_adaptiveUI_1w914_1";
const mainContent$1 = "_mainContent_1w914_18";
const slogan$2 = "_slogan_1w914_32";
const sloganSubtitle$2 = "_sloganSubtitle_1w914_44";
const sloganTitle$2 = "_sloganTitle_1w914_53";
const infoBlock$1 = "_infoBlock_1w914_74";
const timeline = "_timeline_1w914_214";
const timelineItem = "_timelineItem_1w914_231";
const timelineStep = "_timelineStep_1w914_241";
const timelineContent = "_timelineContent_1w914_259";
const timelineTitle = "_timelineTitle_1w914_266";
const timelineText = "_timelineText_1w914_273";
const timelineMedia = "_timelineMedia_1w914_282";
const pdfViewer = "_pdfViewer_1w914_364";
const pdfObject = "_pdfObject_1w914_374";
const discussionImage$1 = "_discussionImage_1w914_396";
const image$1 = "_image_1w914_404";
const brainstormingRow = "_brainstormingRow_1w914_591";
const brainstormingLeft = "_brainstormingLeft_1w914_599";
const brainstormingImage$1 = "_brainstormingImage_1w914_608";
const reportCard = "_reportCard_1w914_617";
const reportImage = "_reportImage_1w914_625";
const insightCards = "_insightCards_1w914_633";
const insightCard = "_insightCard_1w914_633";
const insightHeader = "_insightHeader_1w914_652";
const insightIcon = "_insightIcon_1w914_659";
const insightTag = "_insightTag_1w914_663";
const insightTitle = "_insightTitle_1w914_668";
const insightText$1 = "_insightText_1w914_676";
const insightFooter = "_insightFooter_1w914_683";
const insightReference = "_insightReference_1w914_689";
const reportsRow = "_reportsRow_1w914_696";
const confidentialNote = "_confidentialNote_1w914_728";
const prototypesGrid = "_prototypesGrid_1w914_753";
const prototypeCard = "_prototypeCard_1w914_760";
const prototypeImage = "_prototypeImage_1w914_768";
const prototypeCaption = "_prototypeCaption_1w914_778";
const testingSection = "_testingSection_1w914_793";
const metricsRow = "_metricsRow_1w914_809";
const metricCard = "_metricCard_1w914_819";
const metricHeader = "_metricHeader_1w914_830";
const metricValue = "_metricValue_1w914_836";
const metricTitle = "_metricTitle_1w914_844";
const barsContainer = "_barsContainer_1w914_853";
const barWrapper = "_barWrapper_1w914_863";
const barGroup = "_barGroup_1w914_870";
const bar = "_bar_1w914_853";
const beforeBar = "_beforeBar_1w914_884";
const afterBar = "_afterBar_1w914_890";
const barLabel = "_barLabel_1w914_896";
const barCaption = "_barCaption_1w914_903";
const progressRings = "_progressRings_1w914_911";
const ring = "_ring_1w914_918";
const ringSVG = "_ringSVG_1w914_927";
const ringOuter = "_ringOuter_1w914_934";
const ringInner = "_ringInner_1w914_943";
const ringCaption = "_ringCaption_1w914_952";
const sectionHeader = "_sectionHeader_1w914_1017";
const sectionContainer = "_sectionContainer_1w914_1023";
const styles$i = {
  adaptiveUI,
  mainContent: mainContent$1,
  slogan: slogan$2,
  sloganSubtitle: sloganSubtitle$2,
  sloganTitle: sloganTitle$2,
  infoBlock: infoBlock$1,
  timeline,
  timelineItem,
  timelineStep,
  timelineContent,
  timelineTitle,
  timelineText,
  timelineMedia,
  pdfViewer,
  pdfObject,
  discussionImage: discussionImage$1,
  image: image$1,
  brainstormingRow,
  brainstormingLeft,
  brainstormingImage: brainstormingImage$1,
  reportCard,
  reportImage,
  insightCards,
  insightCard,
  insightHeader,
  insightIcon,
  insightTag,
  insightTitle,
  insightText: insightText$1,
  insightFooter,
  insightReference,
  reportsRow,
  confidentialNote,
  prototypesGrid,
  prototypeCard,
  prototypeImage,
  prototypeCaption,
  testingSection,
  metricsRow,
  metricCard,
  metricHeader,
  metricValue,
  metricTitle,
  barsContainer,
  barWrapper,
  barGroup,
  bar,
  beforeBar,
  afterBar,
  barLabel,
  barCaption,
  progressRings,
  ring,
  ringSVG,
  ringOuter,
  ringInner,
  ringCaption,
  sectionHeader,
  sectionContainer
};
const workshopSlidesPDF = "/assets/workshop-slides-DSSSkpCU.pdf";
const discussionImage = "/assets/Discussion-DjZgi_BB.jpg";
const brainstormingImage = "/assets/Brainstorming-BE0eRIFf.jpg";
const AUIReport1Image = "/assets/AUIReport1-YnpyzStY.jpg";
const AUIReport2Image = "/assets/AUIReprot2-CLKAtU91.jpg";
const AUIReport3Image = "/assets/AUIReprot3-BC-urTn3.jpg";
const therapy1Image = "/assets/Therapy1-pDrVUGwc.png";
const therapy2Image = "/assets/Therapy2-FSnoeYLg.png";
const therapy3Image = "/assets/Therapy3-DO8hQJBk.png";
const therapy4Image = "/assets/Therapy4-CTLauhNb.png";
const meta$9 = () => {
  return baseMeta({
    title: "Adaptive UI for Philips Sleep & Respiratory Care",
    description: "An AI-driven initiative at Philips—combining an Adaptive UI workshop I led and collaborative user testing with fellow designers, to deliver personalized, compliant interfaces for CPAP devices.",
    prefix: "Projects"
  });
};
const AdaptiveUI = () => {
  const { theme } = useTheme();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$i.adaptiveUI, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$i.slogan, children: [
        /* @__PURE__ */ jsx("div", { className: styles$i.sloganSubtitle, children: "Adaptive UI – Workshop & User Testing for Philips Sleep & Respiratory Care" }),
        /* @__PURE__ */ jsx("h1", { className: styles$i.sloganTitle, children: "Breathe easy: Subtle AI that adapts, never overshadows." }),
        /* @__PURE__ */ jsx("div", { className: styles$i.sloganDivider })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$i.mainContent, children: [
        /* @__PURE__ */ jsx("div", { className: projectStyles.projectInfo, children: /* @__PURE__ */ jsxs("section", { className: projectStyles.contentSection, children: [
          /* @__PURE__ */ jsxs("div", { className: projectStyles.contentLeft, children: [
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "Company" }),
              /* @__PURE__ */ jsx("div", { className: projectStyles.infoList, children: "Philips" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "Team" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Sara Wang(UX Designer)" }),
                /* @__PURE__ */ jsx("li", { children: "Keith Fraser(Senior UX Designer)" }),
                /* @__PURE__ */ jsx("li", { children: "10+ Philips colleagues(R&D, Marketing, Engineering)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `${styles$i.infoBlock} ${projectStyles.infoBlock}`, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "My Contribution" }),
              /* @__PURE__ */ jsxs("ol", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "AUI Workshop Lead" }),
                /* @__PURE__ */ jsx("li", { children: "User Research & Testing" }),
                /* @__PURE__ */ jsx("li", { children: "Design Prototype & Analysis" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: projectStyles.contentRight, children: /* @__PURE__ */ jsxs("div", { className: projectStyles.overviewBlock, children: [
            /* @__PURE__ */ jsx("h2", { className: projectStyles.overviewTitle, children: "Overview" }),
            /* @__PURE__ */ jsxs("p", { className: projectStyles.overviewText, children: [
              "During my internship at Philips Sleep & Respiratory Care, I explored how ",
              /* @__PURE__ */ jsx("strong", { children: "Adaptive UI" }),
              "—small yet powerful AI enhancements—could make ",
              /* @__PURE__ */ jsx("strong", { children: "CPAP therapy" }),
              " more user-friendly."
            ] }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "I tackled two closely related projects: first, I organized an in-house workshop to align cross-functional teams on AUI opportunities; next, I worked with two fellow UX designers to build and test four prototype concepts with real users." }),
            /* @__PURE__ */ jsxs("p", { className: projectStyles.overviewText, children: [
              "Our small-scale study indicated a potential ",
              /* @__PURE__ */ jsx("strong", { children: "10–15% boost" }),
              " in device usage and user satisfaction. By offering ",
              /* @__PURE__ */ jsx("strong", { children: "subtle, user-controlled AI features" }),
              ", we reduced everyday friction so patients could stick to their CPAP routines more easily—helping them stay on track with treatment in a natural, comfortable way."
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: projectStyles.sectionContainer, children: [
          /* @__PURE__ */ jsxs("div", { className: projectStyles.sectionHeader, children: [
            /* @__PURE__ */ jsx("div", { className: projectStyles.sectionSubtitle, children: "● The Workshop" }),
            /* @__PURE__ */ jsx("h2", { className: projectStyles.sectionTitle, children: "Exploring Adaptive UI to Improve CPAP Usage" }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.sectionDescription, children: "Nearly 50% of CPAP users drop out due to complexity. I led a workshop to design subtle AI cues that simplify tasks and boost adherence." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$i.timeline, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$i.timelineItem, children: [
              /* @__PURE__ */ jsx("div", { className: styles$i.timelineStep, children: "1" }),
              /* @__PURE__ */ jsxs("div", { className: styles$i.timelineContent, children: [
                /* @__PURE__ */ jsx("h3", { className: styles$i.timelineTitle, children: "Introduce the concept of AUI" }),
                /* @__PURE__ */ jsx("div", { className: styles$i.timelineMedia, children: /* @__PURE__ */ jsx("div", { className: styles$i.pdfViewer, children: /* @__PURE__ */ jsx(
                  "object",
                  {
                    data: workshopSlidesPDF,
                    type: "application/pdf",
                    className: styles$i.pdfObject,
                    children: /* @__PURE__ */ jsxs("p", { children: [
                      "Your browser does not support PDFs. Please download the PDF to view it:",
                      /* @__PURE__ */ jsx("a", { href: workshopSlidesPDF, children: "Download PDF" })
                    ] })
                  }
                ) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles$i.timelineItem, children: [
              /* @__PURE__ */ jsx("div", { className: styles$i.timelineStep, children: "2" }),
              /* @__PURE__ */ jsxs("div", { className: styles$i.timelineContent, children: [
                /* @__PURE__ */ jsx("h3", { className: styles$i.timelineTitle, children: "Break & Discussion" }),
                /* @__PURE__ */ jsx("div", { className: styles$i.timelineMedia, children: /* @__PURE__ */ jsx("div", { className: styles$i.discussionImage, children: /* @__PURE__ */ jsx("img", { src: discussionImage, alt: "Team discussion during the workshop", className: styles$i.image }) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles$i.timelineItem, children: [
              /* @__PURE__ */ jsx("div", { className: styles$i.timelineStep, children: "3" }),
              /* @__PURE__ */ jsxs("div", { className: styles$i.timelineContent, children: [
                /* @__PURE__ */ jsx("h3", { className: styles$i.timelineTitle, children: "Brainstorming: Identifying AUI Opportunities in SR&C" }),
                /* @__PURE__ */ jsx("div", { className: styles$i.timelineText, children: "Top left shows workshop brainstorming, top right displays product psychology principles for post-analysis. Bottom row presents workshop reports." }),
                /* @__PURE__ */ jsxs("div", { className: styles$i.brainstormingRow, children: [
                  /* @__PURE__ */ jsx("div", { className: styles$i.brainstormingLeft, children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: brainstormingImage,
                      alt: "Initial brainstorming ideas",
                      className: styles$i.brainstormingImage
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: styles$i.insightCards, children: [
                    /* @__PURE__ */ jsxs("div", { className: styles$i.insightCard, children: [
                      /* @__PURE__ */ jsxs("div", { className: styles$i.insightHeader, children: [
                        /* @__PURE__ */ jsx("span", { className: styles$i.insightIcon, children: "🧠" }),
                        /* @__PURE__ */ jsx("span", { className: styles$i.insightTag, children: "#PSYCHOLOGY INSIGHT" })
                      ] }),
                      /* @__PURE__ */ jsx("h4", { className: styles$i.insightTitle, children: "Hick's Law" }),
                      /* @__PURE__ */ jsxs("p", { className: styles$i.insightText, children: [
                        "Too many options can confuse users.",
                        /* @__PURE__ */ jsx("sup", { children: "1" })
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: styles$i.insightText, children: [
                        "By using progressive disclosure",
                        /* @__PURE__ */ jsx("sup", { children: "2" }),
                        ", Scribe reduced cognitive load",
                        /* @__PURE__ */ jsx("sup", { children: "3" }),
                        " and helped people complete their signature quicker."
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: styles$i.insightFooter, children: [
                        /* @__PURE__ */ jsx("span", { className: styles$i.insightReference, children: "¹ Hick's Law, Growth.Design" }),
                        /* @__PURE__ */ jsx("span", { className: styles$i.insightReference, children: "² Progressive Disclosure, Growth.Design" }),
                        /* @__PURE__ */ jsx("span", { className: styles$i.insightReference, children: "³ Cognitive Load, Growth.Design" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: styles$i.insightCard, children: [
                      /* @__PURE__ */ jsxs("div", { className: styles$i.insightHeader, children: [
                        /* @__PURE__ */ jsx("span", { className: styles$i.insightIcon, children: "🧠" }),
                        /* @__PURE__ */ jsx("span", { className: styles$i.insightTag, children: "#PSYCHOLOGY INSIGHT" })
                      ] }),
                      /* @__PURE__ */ jsx("h4", { className: styles$i.insightTitle, children: "Drunk User Theory" }),
                      /* @__PURE__ */ jsx("p", { className: styles$i.insightText, children: "Users can be distracted, overwhelmed, or inattentive. Designing for the worst-case scenario ensures that core functions remain simple, accessible, and easy to use—even in suboptimal conditions." }),
                      /* @__PURE__ */ jsx("p", { className: styles$i.insightText, children: "By minimizing friction and focusing on intuitive interactions, Adaptive UI makes CPAP therapy more seamless." }),
                      /* @__PURE__ */ jsx("div", { className: styles$i.insightFooter, children: /* @__PURE__ */ jsx("span", { className: styles$i.insightReference, children: "¹ Drunk User Theory, Cassie Kozyrkov" }) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: styles$i.reportsRow, children: [
                  /* @__PURE__ */ jsx("div", { className: styles$i.reportCard, children: /* @__PURE__ */ jsx("img", { src: AUIReport1Image, alt: "User scenarios analysis", className: styles$i.reportImage }) }),
                  /* @__PURE__ */ jsx("div", { className: styles$i.reportCard, children: /* @__PURE__ */ jsx("img", { src: AUIReport2Image, alt: "AUI solutions proposal", className: styles$i.reportImage }) }),
                  /* @__PURE__ */ jsx("div", { className: styles$i.reportCard, children: /* @__PURE__ */ jsx("img", { src: AUIReport3Image, alt: "Final implementation plan", className: styles$i.reportImage }) })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$i.sectionContainer, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$i.sectionHeader, children: [
              /* @__PURE__ */ jsx("div", { className: projectStyles.sectionSubtitle, children: "● Prototype Development " }),
              /* @__PURE__ */ jsx("h2", { className: projectStyles.sectionTitle, children: "Four Prototypes, Smarter Interfaces" }),
              /* @__PURE__ */ jsx("div", { className: projectStyles.sectionDescription, children: "Building on this workshop, I worked with colleagues on a separate research project where we designed and conducted initial testing of four conceptual prototypes for CPAP devices. Although the two projects were independent, both focused on using adaptive interactions to enhance healthcare management, each demonstrating the potential value of adaptive interfaces in different ways." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$i.confidentialNote, children: "Due to confidentiality, these prototypes are shown in a blurred format." }),
            /* @__PURE__ */ jsx("div", { className: styles$i.prototypesGrid, children: [
              { image: therapy1Image, caption: "Comfort Settings Auto-Adjustment" },
              { image: therapy2Image, caption: "Personalized Health Insights" },
              { image: therapy3Image, caption: "Auto-Suggestions for Routine Tasks" },
              { image: therapy4Image, caption: "Patient Data Integration for Doctor Visits" }
            ].map(({ image: image5, caption }, index2) => /* @__PURE__ */ jsxs("div", { className: styles$i.prototypeCard, children: [
              /* @__PURE__ */ jsx("img", { src: image5, alt: `Prototype ${index2 + 1}`, className: styles$i.prototypeImage }),
              /* @__PURE__ */ jsx("div", { className: styles$i.prototypeCaption, children: caption })
            ] }, index2)) }),
            /* @__PURE__ */ jsxs("div", { className: styles$i.testingSection, children: [
              /* @__PURE__ */ jsx("div", { className: projectStyles.sectionSubtitle, children: "● User Testing" }),
              /* @__PURE__ */ jsx("h2", { className: projectStyles.sectionTitle, children: "From Complexity to Simplicity" }),
              /* @__PURE__ */ jsxs("p", { className: projectStyles.sectionDescription, children: [
                "We conducted ",
                /* @__PURE__ */ jsx("strong", { children: "remote usability testing" }),
                " with participants on UserTesting.com and ",
                /* @__PURE__ */ jsx("strong", { children: "in-person sessions" }),
                " using ",
                /* @__PURE__ */ jsx("strong", { children: "interactive cards" }),
                ", allowing users to ",
                /* @__PURE__ */ jsx("strong", { children: "customize their interface" }),
                ". The testing revealed ",
                /* @__PURE__ */ jsx("strong", { children: "key user preferences" }),
                " for features, display, and interaction hierarchy, ",
                /* @__PURE__ */ jsx("strong", { children: "guiding prototype refinement and validation" }),
                ". We aimed to achieve the following goals (expected outcomes):"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: styles$i.metricsRow, children: [
                /* @__PURE__ */ jsxs("div", { className: styles$i.metricCard, children: [
                  /* @__PURE__ */ jsxs("div", { className: styles$i.metricHeader, children: [
                    /* @__PURE__ */ jsx("div", { className: styles$i.metricValue, children: "-30%" }),
                    /* @__PURE__ */ jsx("div", { className: styles$i.metricTitle, children: "FEWER CLICKS" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: styles$i.barsContainer, children: /* @__PURE__ */ jsxs("div", { className: styles$i.barWrapper, children: [
                    /* @__PURE__ */ jsxs("div", { className: styles$i.barGroup, children: [
                      /* @__PURE__ */ jsx("div", { className: styles$i.barLabel, children: "100%" }),
                      /* @__PURE__ */ jsx("div", { className: `${styles$i.bar} ${styles$i.beforeBar}` }),
                      /* @__PURE__ */ jsx("div", { className: styles$i.barCaption, children: "Before" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: styles$i.barGroup, children: [
                      /* @__PURE__ */ jsx("div", { className: styles$i.barLabel, children: "70%" }),
                      /* @__PURE__ */ jsx("div", { className: `${styles$i.bar} ${styles$i.afterBar}` }),
                      /* @__PURE__ */ jsx("div", { className: styles$i.barCaption, children: "After" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: styles$i.metricCard, children: [
                  /* @__PURE__ */ jsxs("div", { className: styles$i.metricHeader, children: [
                    /* @__PURE__ */ jsx("div", { className: styles$i.metricValue, children: "4.0/5" }),
                    /* @__PURE__ */ jsx("div", { className: styles$i.metricTitle, children: "USER SATISFACTION" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: styles$i.progressRings, children: /* @__PURE__ */ jsxs("div", { className: styles$i.ring, children: [
                    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", className: styles$i.ringSVG, children: [
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          cx: "60",
                          cy: "60",
                          r: "50",
                          className: styles$i.ringOuter,
                          style: {
                            strokeDasharray: `${Math.PI * 100 * 0.64} ${Math.PI * 100}`
                          }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          cx: "60",
                          cy: "60",
                          r: "40",
                          className: styles$i.ringInner,
                          style: {
                            strokeDasharray: `${Math.PI * 80 * 0.82} ${Math.PI * 80}`
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: styles$i.ringCaption, children: "↑ from 3.2" })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: styles$i.metricCard, children: [
                  /* @__PURE__ */ jsxs("div", { className: styles$i.metricHeader, children: [
                    /* @__PURE__ */ jsx("div", { className: styles$i.metricValue, children: "+15%" }),
                    /* @__PURE__ */ jsx("div", { className: styles$i.metricTitle, children: "USAGE BOOST" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: styles$i.progressRings, children: /* @__PURE__ */ jsxs("div", { className: styles$i.ring, children: [
                    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 120 120", className: styles$i.ringSVG, children: [
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          cx: "60",
                          cy: "60",
                          r: "50",
                          className: styles$i.ringOuter,
                          style: {
                            strokeDasharray: `${Math.PI * 100 * 0.5} ${Math.PI * 100}`
                          }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "circle",
                        {
                          cx: "60",
                          cy: "60",
                          r: "50",
                          className: styles$i.ringInner,
                          style: {
                            strokeDasharray: `${Math.PI * 100 * 0.15} ${Math.PI * 100}`,
                            strokeDashoffset: `${-Math.PI * 100 * 0.5}`
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: styles$i.ringCaption, children: "10% — 15%" })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: projectStyles.sectionDescription, children: [
                "Whether during the workshop's ",
                /* @__PURE__ */ jsx("strong", { children: "creative phase" }),
                " or the prototypes' ",
                /* @__PURE__ */ jsx("strong", { children: "feasibility testing phase" }),
                ", the goal remains the same: to help medical devices ",
                /* @__PURE__ */ jsx("strong", { children: "better 'understand' user needs" }),
                " and enable users to ",
                /* @__PURE__ */ jsx("strong", { children: "manage their health more conveniently" }),
                ". Through ",
                /* @__PURE__ */ jsx("strong", { children: "continuous iteration and testing" }),
                ", these ",
                /* @__PURE__ */ jsx("strong", { children: "adaptive interface concepts" }),
                " are poised to evolve into more fully realized product features, ultimately ",
                /* @__PURE__ */ jsx("strong", { children: "delivering meaningful improvements" }),
                " in the healthcare industry."
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdaptiveUI,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
const mrFinder = "_mrFinder_abmen_1";
const mainContent = "_mainContent_abmen_7";
const slogan$1 = "_slogan_abmen_14";
const sloganSubtitle$1 = "_sloganSubtitle_abmen_26";
const sloganTitle$1 = "_sloganTitle_abmen_35";
const sloganDivider = "_sloganDivider_abmen_44";
const hackathonNote = "_hackathonNote_abmen_79";
const repoLink = "_repoLink_abmen_248";
const githubIcon = "_githubIcon_abmen_267";
const scenariosContainer = "_scenariosContainer_abmen_289";
const scenariosGrid = "_scenariosGrid_abmen_296";
const scenarioCard = "_scenarioCard_abmen_313";
const scenarioTitle = "_scenarioTitle_abmen_338";
const scenarioIcon = "_scenarioIcon_abmen_349";
const scenarioContent = "_scenarioContent_abmen_356";
const blockText = "_blockText_abmen_361";
const useCaseContainer = "_useCaseContainer_abmen_406";
const useCaseStep = "_useCaseStep_abmen_411";
const useCaseContent = "_useCaseContent_abmen_421";
const useCaseImage = "_useCaseImage_abmen_428";
const sectionGroup$1 = "_sectionGroup_abmen_477";
const sectionText$1 = "_sectionText_abmen_484";
const fullWidth = "_fullWidth_abmen_499";
const styles$h = {
  mrFinder,
  mainContent,
  slogan: slogan$1,
  sloganSubtitle: sloganSubtitle$1,
  sloganTitle: sloganTitle$1,
  sloganDivider,
  hackathonNote,
  repoLink,
  githubIcon,
  scenariosContainer,
  scenariosGrid,
  scenarioCard,
  scenarioTitle,
  scenarioIcon,
  scenarioContent,
  blockText,
  useCaseContainer,
  useCaseStep,
  useCaseContent,
  useCaseImage,
  sectionGroup: sectionGroup$1,
  sectionText: sectionText$1,
  fullWidth
};
const airbnbIcon = "/assets/noun-airbnb-6212186-ZZxKo7qA.png";
const travelIcon = "/assets/noun-arrivals-6069945-BdJoeI3w.png";
const caregiverIcon = "/assets/noun-caregiver-6549679-DInyQEDK.png";
const scanVideo = "/assets/scan-Bye_EgJ9.mp4";
const tagVideo = "/assets/tag-DFellypH.mp4";
const askVideo = "/assets/Ask-D3RgA-f-.mp4";
const followVideo = "/assets/Follow-X977EtXR.mp4";
const airbnbImage = "/assets/airbnb-CPpVirjl.png";
const cognitive3dImage = "/assets/cognitive3d-l4dixmyP.mp4";
const meta$8 = () => {
  return baseMeta({
    title: "MR Finder - Spatial Intelligence for Real-World Search",
    description: "Never Lose Anything Again. Anywhere.",
    prefix: "Projects | "
  });
};
function MRFinder() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$h.mrFinder, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$h.slogan, children: [
        /* @__PURE__ */ jsx("div", { className: styles$h.sloganSubtitle, children: "MR Finder - Spatial Intelligence for Real-World Search" }),
        /* @__PURE__ */ jsx("h1", { className: styles$h.sloganTitle, children: "Never Lose Anything Again. Anywhere." }),
        /* @__PURE__ */ jsx("div", { className: styles$h.sloganDivider })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$h.mainContent, children: /* @__PURE__ */ jsxs("div", { className: projectStyles.projectInfo, children: [
        /* @__PURE__ */ jsxs("section", { className: projectStyles.contentSection, children: [
          /* @__PURE__ */ jsxs("div", { className: projectStyles.contentLeft, children: [
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "Team" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Sutanuka Jashu (Researcher)" }),
                /* @__PURE__ */ jsx("li", { children: "Arthur Baney (SDE)" }),
                /* @__PURE__ */ jsx("li", { children: "Sowilo Xiong (SDE)" }),
                /* @__PURE__ */ jsx("li", { children: "Jiachen Zeng (PM)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "My Contribution" }),
              /* @__PURE__ */ jsxs("ul", { className: projectStyles.infoList, children: [
                /* @__PURE__ */ jsx("li", { children: "Built Figma-Unity Design Workflows" }),
                /* @__PURE__ */ jsx("li", { children: "Designed Voice-Driven AR Navigation" }),
                /* @__PURE__ */ jsx("li", { children: "Led Cross-Team UX Alignment" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.infoBlock, children: [
              /* @__PURE__ */ jsx("h2", { className: projectStyles.infoTitle, children: "Tech Stack" }),
              /* @__PURE__ */ jsxs("div", { className: projectStyles.infoList, children: [
                "Unity + MRTK, Wit.ai, Meta Quest SDK, SLAM, Cognitive3D",
                /* @__PURE__ */ jsx("div", { className: styles$h.hackathonNote, children: "Developed at MIT Reality Hack 2024" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: projectStyles.contentRight, children: /* @__PURE__ */ jsxs("div", { className: projectStyles.overviewBlock, children: [
            /* @__PURE__ */ jsx("h2", { className: projectStyles.overviewTitle, children: "Overview" }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "We lose critical items daily—passports buried in drawers, keys swallowed by clutter, Wi-Fi codes on vanishing sticky notes. MR Finder tackles this chaos through AI-driven spatial anchors, blending voice commands and persistent mixed reality markers to turn any space into a searchable inventory." }),
            /* @__PURE__ */ jsxs("p", { className: projectStyles.overviewText, children: [
              "As a five-person team at MIT Reality Hack, we reimagined lost-and-found by merging ",
              /* @__PURE__ */ jsx("strong", { children: "SLAM-based 3D mapping" }),
              " (Meta Quest 3) and Unity MRTK interactions with ",
              /* @__PURE__ */ jsx("strong", { children: "conversational AI" }),
              ". Users tag items via voice/photo and retrieve them months later with AR arrows—no computer vision or extra hardware required."
            ] }),
            /* @__PURE__ */ jsx("p", { className: projectStyles.overviewText, children: "By anchoring digital memory to physical spaces, MR Finder redefines lost-and-found for real-world chaos." }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://github.com/azb/MR-Finder",
                target: "_blank",
                rel: "noopener noreferrer",
                className: styles$h.repoLink,
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      viewBox: "0 0 24 24",
                      className: styles$h.githubIcon,
                      children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                    }
                  ),
                  "Github Code Sample"
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: projectStyles.sectionContainer, children: /* @__PURE__ */ jsxs("div", { className: projectStyles.sectionHeader, children: [
          /* @__PURE__ */ jsx("h2", { className: projectStyles.sectionSubtitle, children: "● Why It Matters" }),
          /* @__PURE__ */ jsx("div", { className: projectStyles.sectionTitle, children: "Lost your keys... again?" }),
          /* @__PURE__ */ jsx("div", { className: projectStyles.sectionDescription, children: "We've all wasted hours searching for lost keys, passports, or that one missing charger. MR Finder tackles this universal frustration by reimagining how humans interact with physical spaces." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: styles$h.scenariosContainer, children: /* @__PURE__ */ jsx("div", { className: styles$h.scenariosGrid, children: [
          {
            title: "Airbnb Hosts",
            icon: airbnbIcon,
            frustration: '"Guests call me at 2AM for Wi-Fi codes"'
          },
          {
            title: "Frequent Travelers",
            icon: travelIcon,
            frustration: '"I hid my passport somewhere safe..."'
          },
          {
            title: "Caregivers",
            icon: caregiverIcon,
            frustration: '"I spend 30 mins daily searching for pills"'
          }
        ].map((scenario, index2) => /* @__PURE__ */ jsxs("div", { className: styles$h.scenarioCard, children: [
          /* @__PURE__ */ jsxs("h3", { className: styles$h.scenarioTitle, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: scenario.icon,
                alt: "",
                className: styles$h.scenarioIcon
              }
            ),
            scenario.title
          ] }),
          /* @__PURE__ */ jsx("div", { className: styles$h.scenarioContent, children: /* @__PURE__ */ jsx("p", { className: styles$h.blockText, children: scenario.frustration }) })
        ] }, index2)) }) }),
        /* @__PURE__ */ jsx("div", { className: projectStyles.solutionContainer, children: /* @__PURE__ */ jsxs("div", { className: projectStyles.inverted, "data-theme": "dark", children: [
          /* @__PURE__ */ jsx("h2", { className: projectStyles.solutionTitle, children: "Our Solution" }),
          /* @__PURE__ */ jsxs("div", { className: projectStyles.solutionSteps, children: [
            /* @__PURE__ */ jsxs("div", { className: projectStyles.solutionStep, children: [
              /* @__PURE__ */ jsx("div", { className: projectStyles.solutionImage, children: /* @__PURE__ */ jsx(
                "video",
                {
                  className: projectStyles.solutionVideo,
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  children: /* @__PURE__ */ jsx("source", { src: scanVideo, type: "video/mp4" })
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: projectStyles.stepContent, children: [
                /* @__PURE__ */ jsx("div", { className: projectStyles.stepNumber, children: "1" }),
                /* @__PURE__ */ jsx("h3", { className: projectStyles.sectionTitle, children: "Map Your Space" }),
                /* @__PURE__ */ jsx("p", { className: projectStyles.sectionText, children: "Using your Quest 3 headset, scan your room for about 20 seconds. Behind the scenes, our advanced SLAM engine builds a precise 3D map of your environment with 1cm accuracy, establishing digital anchors on walls and floors.                      " })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.solutionStep, children: [
              /* @__PURE__ */ jsx("div", { className: projectStyles.solutionImage, children: /* @__PURE__ */ jsx(
                "video",
                {
                  className: projectStyles.solutionVideo,
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  children: /* @__PURE__ */ jsx("source", { src: tagVideo, type: "video/mp4" })
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: projectStyles.stepContent, children: [
                /* @__PURE__ */ jsx("div", { className: projectStyles.stepNumber, children: "2" }),
                /* @__PURE__ */ jsx("h3", { className: projectStyles.sectionTitle, children: "Tag Critical Items" }),
                /* @__PURE__ */ jsx("p", { className: projectStyles.sectionText, children: 'Simply speak a command like "Tag my passport here" or capture a photo of an item. The system records its location at pinpoint-accurate, GPS-free coordinates, ensuring the tag remains intact even if the room is rearranged.' })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.solutionStep, children: [
              /* @__PURE__ */ jsx("div", { className: projectStyles.solutionImage, children: /* @__PURE__ */ jsx(
                "video",
                {
                  className: projectStyles.solutionVideo,
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  children: /* @__PURE__ */ jsx("source", { src: askVideo, type: "video/mp4" })
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: projectStyles.stepContent, children: [
                /* @__PURE__ */ jsx("div", { className: projectStyles.stepNumber, children: "3" }),
                /* @__PURE__ */ jsx("h3", { className: projectStyles.sectionTitle, children: "Voice-Activated Search" }),
                /* @__PURE__ */ jsx("p", { className: projectStyles.sectionText, children: `When you need to locate something, just say, "Where's my medication?" Our GPT-4–powered system processes your natural voice command, matches it to your tagged items, and retrieves their exact coordinates instantly.` })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: projectStyles.solutionStep, children: [
              /* @__PURE__ */ jsx("div", { className: projectStyles.solutionImage, children: /* @__PURE__ */ jsx(
                "video",
                {
                  className: projectStyles.solutionVideo,
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  children: /* @__PURE__ */ jsx("source", { src: followVideo, type: "video/mp4" })
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: projectStyles.stepContent, children: [
                /* @__PURE__ */ jsx("div", { className: projectStyles.stepNumber, children: "4" }),
                /* @__PURE__ */ jsx("h3", { className: projectStyles.sectionTitle, children: "Follow AR Guide" }),
                /* @__PURE__ */ jsx("p", { className: projectStyles.sectionText, children: "AR cues take over as virtual arrows, audio prompts, or a heatmap overlay appear in your headset, guiding you seamlessly along an optimized navigation path rendered by MRTK." })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: styles$h.useCaseContainer, children: /* @__PURE__ */ jsxs("div", { className: styles$h.useCaseStep, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$h.useCaseContent, children: [
            /* @__PURE__ */ jsx("h2", { className: projectStyles.sectionSubtitle, children: "● Airbnb Use Case" }),
            /* @__PURE__ */ jsx("div", { className: projectStyles.sectionTitle, children: "Effortless Hospitality, No More Notes" }),
            /* @__PURE__ */ jsx("div", { className: projectStyles.sectionDescription, children: "Airbnb hosts pre-tag essentials—Wi-Fi cards, extra towels, coffee machines—so guests simply wear a headset, speak their needs, and follow AR cues. No more handwritten notes or phone calls; language barriers vanish for a truly seamless stay.                " })
          ] }),
          /* @__PURE__ */ jsx("div", { className: styles$h.useCaseImage, children: /* @__PURE__ */ jsx("img", { src: airbnbImage, alt: "Airbnb use case illustration" }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: styles$h.useCaseContainer, children: /* @__PURE__ */ jsxs("div", { className: styles$h.useCaseStep, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$h.useCaseContent, children: [
            /* @__PURE__ */ jsx("h2", { className: projectStyles.sectionSubtitle, children: "● Tech Highlights" }),
            /* @__PURE__ */ jsxs("div", { className: styles$h.sectionGroup, children: [
              /* @__PURE__ */ jsxs("p", { className: styles$h.sectionText, children: [
                "○ ",
                /* @__PURE__ */ jsx("strong", { children: "SLAM Precision" }),
                ": Continuous scanning locks virtual tags to real objects, preventing AR drift."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: styles$h.sectionText, children: [
                "○ ",
                /* @__PURE__ */ jsx("strong", { children: "ChatGPT Integration" }),
                ": Enables natural, conversational queries for a more intuitive experience."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: styles$h.sectionText, children: [
                "○ ",
                /* @__PURE__ */ jsx("strong", { children: "Unity MRTK" }),
                ": Powers 3D menus and smooth interactions from hardware inputs."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: styles$h.sectionText, children: [
                "○ ",
                /* @__PURE__ */ jsx("strong", { children: "Cognitive3D" }),
                ": Captures spatial data for actionable insights and digital twin potential."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: styles$h.useCaseImage, children: /* @__PURE__ */ jsx("div", { className: projectStyles.solutionImage, children: /* @__PURE__ */ jsx(
            "video",
            {
              className: projectStyles.solutionVideo,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              children: /* @__PURE__ */ jsx("source", { src: cognitive3dImage, type: "video/mp4" })
            }
          ) }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: styles$h.useCaseContainer, children: /* @__PURE__ */ jsx("div", { className: `${styles$h.useCaseStep} ${styles$h.fullWidth}`, children: /* @__PURE__ */ jsxs("div", { className: styles$h.useCaseContent, children: [
          /* @__PURE__ */ jsx("h2", { className: projectStyles.sectionSubtitle, children: "● Next Steps" }),
          /* @__PURE__ */ jsxs("div", { className: styles$h.sectionGroup, children: [
            /* @__PURE__ */ jsxs("p", { className: styles$h.sectionText, children: [
              "○ ",
              /* @__PURE__ */ jsx("strong", { children: "Automatic Object Recognition" }),
              ": Use AI-based image analysis to tag items without manual snapshots."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: styles$h.sectionText, children: [
              "○ ",
              /* @__PURE__ */ jsx("strong", { children: "Expanded Collaboration" }),
              ": Share digital inventories across multiple headsets, ideal for offices, museums, or senior living communities."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: styles$h.sectionText, children: [
              "○ ",
              /* @__PURE__ */ jsx("strong", { children: "Cloud Sync & Analytics" }),
              ": Integrate with cloud platforms to track usage patterns, enabling future digital twin capabilities."
            ] })
          ] })
        ] }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MRFinder,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
const __variableDynamicImportRuntimeHelper = (glob, path2, segs) => {
  const v = glob[path2];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path2 + (path2.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
function formatTimecode(time) {
  const hours = time / 1e3 / 60 / 60;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  const c = Math.floor((((hours - h) * 60 - m) * 60 - s) * 1e3 / 10);
  return `${zeroPrefix(h)}:${zeroPrefix(m)}:${zeroPrefix(s)}:${zeroPrefix(c)}`;
}
function zeroPrefix(value2) {
  return value2 < 10 ? `0${value2}` : `${value2}`;
}
function readingTime(text2) {
  const wpm = 225;
  const words = text2.trim().split(/\s+/).length;
  const time = words / wpm;
  return time * 1e3 * 60;
}
async function getPosts() {
  const modules = /* @__PURE__ */ Object.assign({ "../articles.hello-world.mdx": route8, "../articles.modern-styling-in-react.mdx": route1 });
  const build = await Promise.resolve().then(() => serverBuild);
  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post2]) => {
      let id = file.replace("../", "routes/").replace(/\.mdx$/, "");
      let slug = build.routes[id].path;
      if (slug === void 0) throw new Error(`No route for ${id}`);
      const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.hello-world.mdx": () => import("./articles.hello-world-C3lWsiOj.js"), "../articles.modern-styling-in-react.mdx": () => import("./articles.modern-styling-in-react-D1jt5bSr.js") }), `../articles.${slug}.mdx`, 2);
      const readTime = readingTime(text2.default);
      const timecode2 = formatTimecode(readTime);
      return {
        slug,
        timecode: timecode2,
        frontmatter: post2.frontmatter
      };
    })
  );
  return sortBy(posts, (post2) => post2.frontmatter.date, "desc");
}
function sortBy(arr, key, dir = "asc") {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}
function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
const divider$2 = "_divider_ucnqf_2";
const line$1 = "_line_ucnqf_8";
const notch = "_notch_ucnqf_30";
const styles$g = {
  divider: divider$2,
  line: line$1,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$g.divider, className),
    style: cssProps(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$g.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$g.notch,
          "data-collapsed": collapsed,
          style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
        }
      )
    ]
  }
);
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
function formatDate(date2) {
  return new Date(date2).toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
}
const articles = "_articles_nr520_3";
const grid$1 = "_grid_nr520_15";
const header$1 = "_header_nr520_53";
const heading$1 = "_heading_nr520_71";
const list$2 = "_list_nr520_76";
const skeleton = "_skeleton_nr520_85";
const skeletonBone = "_skeletonBone_nr520_94";
const post$1 = "_post_nr520_98";
const postLabel = "_postLabel_nr520_148";
const postTag = "_postTag_nr520_149";
const postLink = "_postLink_nr520_223";
const postDate = "_postDate_nr520_280";
const postImage = "_postImage_nr520_290";
const postDetails = "_postDetails_nr520_340";
const postFooter = "_postFooter_nr520_356";
const timecode$1 = "_timecode_nr520_370";
const barcode = "_barcode_nr520_383";
const styles$f = {
  articles,
  grid: grid$1,
  header: header$1,
  heading: heading$1,
  list: list$2,
  skeleton,
  skeletonBone,
  post: post$1,
  postLabel,
  postTag,
  postLink,
  postDate,
  postImage,
  postDetails,
  postFooter,
  timecode: timecode$1,
  barcode
};
function ArticlesPost({ slug, frontmatter: frontmatter2, timecode: timecode2, index: index2 }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title: title2, abstract, date: date2, featured, banner: banner2 } = frontmatter2;
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: styles$f.post,
      "data-featured": !!featured,
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: [
        featured && /* @__PURE__ */ jsx(Text, { className: styles$f.postLabel, size: "s", children: "Featured" }),
        featured && !!banner2 && /* @__PURE__ */ jsx("div", { className: styles$f.postImage, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            noPauseButton: true,
            play: !reduceMotion ? hovered : void 0,
            src: banner2,
            placeholder: `${banner2.split(".")[0]}-placeholder.jpg`,
            alt: "",
            role: "presentation"
          }
        ) }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            unstable_viewTransition: true,
            prefetch: "intent",
            to: `/articles/${slug}`,
            className: styles$f.postLink,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /* @__PURE__ */ jsxs("div", { className: styles$f.postDetails, children: [
              /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$f.postDate, children: [
                /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
                dateTime
              ] }),
              /* @__PURE__ */ jsx(Heading, { as: "h2", level: featured ? 2 : 4, children: title2 }),
              /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: abstract }),
              /* @__PURE__ */ jsxs("div", { className: styles$f.postFooter, children: [
                /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read article" }),
                /* @__PURE__ */ jsx(Text, { className: styles$f.timecode, size: "s", children: timecode2 })
              ] })
            ] })
          }
        ),
        featured && /* @__PURE__ */ jsx(Text, { "aria-hidden": true, className: styles$f.postTag, size: "s", children: "477" })
      ]
    }
  );
}
function SkeletonPost({ index: index2 }) {
  return /* @__PURE__ */ jsx(
    "article",
    {
      "aria-hidden": "true",
      className: classes(styles$f.post, styles$f.skeleton),
      "data-featured": "false",
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: /* @__PURE__ */ jsx("div", { className: styles$f.postLink, children: /* @__PURE__ */ jsxs("div", { className: styles$f.postDetails, children: [
        /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$f.postDate, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
          "Coming soon..."
        ] }),
        /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$f.skeletonBone,
            as: "h2",
            level: 4,
            style: { height: 24, width: "70%" }
          }
        ),
        /* @__PURE__ */ jsx(
          Text,
          {
            className: styles$f.skeletonBone,
            size: "s",
            as: "p",
            style: { height: 90, width: "100%" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: styles$f.postFooter, children: [
          /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read more" }),
          /* @__PURE__ */ jsx(Text, { className: styles$f.timecode, size: "s", children: "00:00:00:00" })
        ] })
      ] }) })
    }
  );
}
function Articles$1() {
  const { posts, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const postsHeader = /* @__PURE__ */ jsxs("header", { className: styles$f.header, children: [
    /* @__PURE__ */ jsx(Heading, { className: styles$f.heading, level: 5, as: "h1", children: /* @__PURE__ */ jsx(DecoderText, { text: "Latest articles" }) }),
    /* @__PURE__ */ jsx(Barcode, { className: styles$f.barcode })
  ] });
  const postList = /* @__PURE__ */ jsxs("div", { className: styles$f.list, children: [
    !isSingleColumn && postsHeader,
    posts.map(({ slug, ...post2 }, index2) => /* @__PURE__ */ jsx(ArticlesPost, { slug, index: index2, ...post2 }, slug)),
    Array(2).fill().map((skeleton2, index2) => /* @__PURE__ */ jsx(SkeletonPost, { index: index2 }, index2))
  ] });
  const featuredPost = /* @__PURE__ */ jsx(ArticlesPost, { ...featured });
  return /* @__PURE__ */ jsxs("article", { className: styles$f.articles, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$f.content, children: [
      !isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$f.grid, children: [
        postList,
        featuredPost
      ] }),
      isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$f.grid, children: [
        postsHeader,
        featuredPost,
        postList
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Barcode({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      width: "153",
      height: "20",
      fill: "currentColor",
      viewBox: "0 0 153 20",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillOpacity: ".6",
          d: "M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
        }
      )
    }
  );
}
async function loader$3() {
  const allPosts = await getPosts();
  const featured = allPosts.filter((post2) => post2.frontmatter.featured)[0];
  const posts = allPosts.filter((post2) => (featured == null ? void 0 : featured.slug) !== post2.slug);
  return json({ posts, featured });
}
function meta$7() {
  return baseMeta({
    title: "Articles",
    description: "A collection of technical design and development articles. May contain incoherent ramblings."
  });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles$1,
  loader: loader$3,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const profileSetupVideo = "/assets/ProfileSetup-CnGwIJwC.mov";
const matchingVideo = "/assets/Matching-BnuoPM_M.mov";
const chattingImage = "/assets/Chatting-OiZvqkfE.png";
const petzbeLogoImage = "/assets/petzbe-dlZ4VP9k.png";
const dogchaLogoImage = "/assets/dogcha-BQpgoiHi.png";
const woofzLogoImage = "/assets/woofz-DUwBkxnH.png";
const tinderLogoImage = "/assets/tinder-B6FpAfnz.png";
const bumbleLogoImage = "/assets/bumble-HqI2KdT-.png";
const petpals = "_petpals_tdl5s_1";
const slogan = "_slogan_tdl5s_7";
const sloganSubtitle = "_sloganSubtitle_tdl5s_19";
const sloganTitle = "_sloganTitle_tdl5s_28";
const divider$1 = "_divider_tdl5s_37";
const contentSection = "_contentSection_tdl5s_44";
const contentLeft = "_contentLeft_tdl5s_57";
const contentRight = "_contentRight_tdl5s_64";
const sectionText = "_sectionText_tdl5s_71";
const sectionTitle$1 = "_sectionTitle_tdl5s_81";
const sectionGroup = "_sectionGroup_tdl5s_99";
const infoBlock = "_infoBlock_tdl5s_174";
const infoTitle = "_infoTitle_tdl5s_179";
const infoList = "_infoList_tdl5s_188";
const overviewBlock = "_overviewBlock_tdl5s_202";
const overviewTitle = "_overviewTitle_tdl5s_207";
const overviewText = "_overviewText_tdl5s_216";
const problemHeader = "_problemHeader_tdl5s_264";
const problemTitle = "_problemTitle_tdl5s_268";
const problemDescription = "_problemDescription_tdl5s_273";
const problemSubtitle = "_problemSubtitle_tdl5s_331";
const solutionContainer = "_solutionContainer_tdl5s_363";
const solutionTitle = "_solutionTitle_tdl5s_368";
const inverted = "_inverted_tdl5s_376";
const stepNumber = "_stepNumber_tdl5s_397";
const solutionImage = "_solutionImage_tdl5s_430";
const solutionVideo = "_solutionVideo_tdl5s_446";
const solutionSteps = "_solutionSteps_tdl5s_460";
const solutionStep = "_solutionStep_tdl5s_460";
const stepContent = "_stepContent_tdl5s_472";
const comparisonSection = "_comparisonSection_tdl5s_504";
const comparisonLeft = "_comparisonLeft_tdl5s_513";
const comparisonRight = "_comparisonRight_tdl5s_514";
const comparisonTitle = "_comparisonTitle_tdl5s_520";
const comparisonText = "_comparisonText_tdl5s_528";
const comparisonInsight = "_comparisonInsight_tdl5s_542";
const insightText = "_insightText_tdl5s_548";
const comparisonLogos = "_comparisonLogos_tdl5s_580";
const comparisonLogo = "_comparisonLogo_tdl5s_580";
const styles$e = {
  petpals,
  slogan,
  sloganSubtitle,
  sloganTitle,
  divider: divider$1,
  contentSection,
  contentLeft,
  contentRight,
  sectionText,
  sectionTitle: sectionTitle$1,
  sectionGroup,
  infoBlock,
  infoTitle,
  infoList,
  overviewBlock,
  overviewTitle,
  overviewText,
  problemHeader,
  problemTitle,
  problemDescription,
  problemSubtitle,
  solutionContainer,
  solutionTitle,
  inverted,
  stepNumber,
  solutionImage,
  solutionVideo,
  solutionSteps,
  solutionStep,
  stepContent,
  comparisonSection,
  comparisonLeft,
  comparisonRight,
  comparisonTitle,
  comparisonText,
  comparisonInsight,
  insightText,
  comparisonLogos,
  comparisonLogo
};
const meta$6 = () => {
  return baseMeta({
    title: "PetPals: Online Pet Social Web App",
    description: "A responsive web app for personalized pet social experiences, featuring AI-driven recommendation system and seamless user interactions.",
    prefix: "Projects"
  });
};
const PetPals = () => {
  const { theme } = useTheme();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$e.petpals, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$e.slogan, children: [
        /* @__PURE__ */ jsx("div", { className: styles$e.sloganSubtitle, children: "Petpals - Pet Social Web App" }),
        /* @__PURE__ */ jsx("h1", { className: styles$e.sloganTitle, children: "Swipe right for the perfect playmate—AI does the rest." }),
        /* @__PURE__ */ jsx("div", { className: styles$e.sloganDivider })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$e.projectInfo, children: /* @__PURE__ */ jsxs("section", { className: styles$e.contentSection, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$e.contentLeft, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$e.infoBlock, children: [
            /* @__PURE__ */ jsx("h2", { className: styles$e.infoTitle, children: "Team" }),
            /* @__PURE__ */ jsxs("ul", { className: styles$e.infoList, children: [
              /* @__PURE__ */ jsx("li", { children: "Miaoyang Ye" }),
              /* @__PURE__ */ jsx("li", { children: "Apple Sun" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$e.infoBlock, children: [
            /* @__PURE__ */ jsx("h2", { className: styles$e.infoTitle, children: "Tech Stack" }),
            /* @__PURE__ */ jsxs("ul", { className: styles$e.infoList, children: [
              /* @__PURE__ */ jsx("li", { children: "Python, Django, React" }),
              /* @__PURE__ */ jsx("li", { children: "SQL, OpenAI API, AWS" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$e.infoBlock, children: [
            /* @__PURE__ */ jsx("h2", { className: styles$e.infoTitle, children: "My Contribution" }),
            /* @__PURE__ */ jsxs("ul", { className: styles$e.infoList, children: [
              /* @__PURE__ */ jsx("li", { children: "User Research & Testing" }),
              /* @__PURE__ */ jsx("li", { children: "UIUX Design" }),
              /* @__PURE__ */ jsx("li", { children: "Agile Development" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$e.contentRight, children: /* @__PURE__ */ jsxs("div", { className: styles$e.overviewBlock, children: [
          /* @__PURE__ */ jsx("h2", { className: styles$e.overviewTitle, children: "Overview" }),
          /* @__PURE__ */ jsxs("p", { className: styles$e.overviewText, children: [
            "This is a ",
            /* @__PURE__ */ jsx("strong", { children: "0 to 1 end-to-end" }),
            " project developing an AI-powered pet social platform, integrating ChatGPT for matchmaking and Google Maps for location-based meetups."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: styles$e.overviewText, children: [
            "My primary contributions include user research, designing high-fidelity prototypes in Figma, and ",
            /* @__PURE__ */ jsx("strong", { children: "optimizing the design-to-code workflow" }),
            " by leveraging Figma's developer mode to generate structured React.js components. I developed the entire frontend architecture and implemented backend API integrations, ensuring seamless system interactions and AI-driven recommendations."
          ] }),
          /* @__PURE__ */ jsx("p", { className: styles$e.overviewText, children: "PetPals was praised by faculty for its innovative use of AI and dating app mechanics, effectively bridging market gaps in pet socialization." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: styles$e.divider }),
      /* @__PURE__ */ jsxs("div", { className: styles$e.projectDetails, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$e.problemHeader, children: [
          /* @__PURE__ */ jsx("div", { className: styles$e.problemSubtitle, children: "● What's wrong" }),
          /* @__PURE__ */ jsx("h2", { className: styles$e.problemTitle, children: "Finding Dog Community Shouldn't Be Hard" }),
          /* @__PURE__ */ jsx("p", { className: styles$e.problemDescription, children: "New pet owners struggle to find a dog-friendly community, leaving both them and their pets isolated." })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: styles$e.contentSection, children: [
          /* @__PURE__ */ jsx("div", { className: styles$e.contentLeft, children: /* @__PURE__ */ jsx("h2", { className: styles$e.sectionTitle, children: "No Easy Way to Connect" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$e.contentRight, children: /* @__PURE__ */ jsxs("div", { className: styles$e.sectionGroup, children: [
            /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "○ Meeting other dog owners relies on chance encounters—there's no structured way to find a local pet community." }),
            /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "○ Without existing connections, it's awkward to approach strangers just to set up playdates." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: styles$e.contentSection, children: [
          /* @__PURE__ */ jsx("div", { className: styles$e.contentLeft, children: /* @__PURE__ */ jsx("h2", { className: styles$e.sectionTitle, children: "Scattered & Inefficient Information" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$e.contentRight, children: /* @__PURE__ */ jsxs("div", { className: styles$e.sectionGroup, children: [
            /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "○ No clear guidance on where to walk dogs, nearby dog parks, or active pet communities." }),
            /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "○ Existing pet apps are overcomplicated, requiring extensive profiles but failing to match pets effectively." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: styles$e.contentSection, children: [
          /* @__PURE__ */ jsx("div", { className: styles$e.contentLeft, children: /* @__PURE__ */ jsx("h2", { className: styles$e.sectionTitle, children: "Mismatch & Compatibility Issues" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$e.contentRight, children: /* @__PURE__ */ jsxs("div", { className: styles$e.sectionGroup, children: [
            /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "○ Dogs have specific play needs based on size, breed, and status (spayed/neutered), making random matching ineffective." }),
            /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "○ Scheduling a walk with a compatible playmate is frustrating—no one has time to browse endless profiles." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$e.divider }),
        /* @__PURE__ */ jsxs("div", { className: styles$e.projectDetails, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$e.problemHeader, children: [
            /* @__PURE__ */ jsx("div", { className: styles$e.problemSubtitle, children: "● Market Research" }),
            /* @__PURE__ */ jsx("h2", { className: styles$e.problemTitle, children: "Pet Social Apps vs. Dating Apps" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$e.comparisonSection, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$e.comparisonLeft, children: [
              /* @__PURE__ */ jsx("h3", { className: styles$e.comparisonTitle, children: "Pet Social Apps: Complicated & Ineffective" }),
              /* @__PURE__ */ jsxs("p", { className: styles$e.comparisonText, children: [
                /* @__PURE__ */ jsx("strong", { children: "Petzbe, DogCha!, Woofz" }),
                " – Require long setups, lack smart matching, and don't help with real-world meetups."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: styles$e.comparisonLogos, children: [
                /* @__PURE__ */ jsx("img", { src: petzbeLogoImage, alt: "Petzbe", className: styles$e.comparisonLogo }),
                /* @__PURE__ */ jsx("img", { src: dogchaLogoImage, alt: "DogCha!", className: styles$e.comparisonLogo }),
                /* @__PURE__ */ jsx("img", { src: woofzLogoImage, alt: "Woofz", className: styles$e.comparisonLogo })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles$e.comparisonRight, children: [
              /* @__PURE__ */ jsx("h3", { className: styles$e.comparisonTitle, children: "Dating Apps: Simple & Effective" }),
              /* @__PURE__ */ jsxs("p", { className: styles$e.comparisonText, children: [
                /* @__PURE__ */ jsx("strong", { children: "Tinder, Bumble" }),
                " – Use swipe-based matching, smart filters, and effortless meetups."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: styles$e.comparisonLogos, children: [
                /* @__PURE__ */ jsx("img", { src: tinderLogoImage, alt: "Tinder", className: styles$e.comparisonLogo }),
                /* @__PURE__ */ jsx("img", { src: bumbleLogoImage, alt: "Bumble", className: styles$e.comparisonLogo })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: styles$e.comparisonInsight, children: /* @__PURE__ */ jsx("p", { className: styles$e.insightText, children: "💡 More in Common Than You Think! Both connect strangers based on compatibility, but pet social apps lag behind. So we built an AI-powered pet matchmaking app with swipe-based matching, smart filters, and easy meetups—just like a dating app, but for pets!" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$e.divider }),
        /* @__PURE__ */ jsx("div", { className: styles$e.solutionContainer, children: /* @__PURE__ */ jsxs("div", { className: styles$e.inverted, "data-theme": theme === "light" ? "dark" : "light", children: [
          /* @__PURE__ */ jsx("h2", { className: styles$e.solutionTitle, children: "Our Solution" }),
          /* @__PURE__ */ jsxs("div", { className: styles$e.solutionSteps, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$e.solutionStep, children: [
              /* @__PURE__ */ jsx("div", { className: styles$e.solutionImage, children: /* @__PURE__ */ jsx(
                "video",
                {
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  className: styles$e.solutionVideo,
                  children: /* @__PURE__ */ jsx("source", { src: profileSetupVideo, type: "video/mp4" })
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: styles$e.stepContent, children: [
                /* @__PURE__ */ jsx("div", { className: styles$e.stepNumber, children: "1" }),
                /* @__PURE__ */ jsx("h3", { className: styles$e.sectionTitle, children: "Quick Profile Setup – Fast & Engaging Onboarding" }),
                /* @__PURE__ */ jsxs("div", { className: styles$e.sectionGroup, children: [
                  /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "Effortless onboarding – Set up your pet's profile in seconds, no lengthy forms." }),
                  /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "Red Flags & Green Flags – A fun, dating-app-inspired way to filter playmates, making compatibility selection quick and engaging." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles$e.solutionStep, children: [
              /* @__PURE__ */ jsx("div", { className: styles$e.solutionImage, children: /* @__PURE__ */ jsx(
                "video",
                {
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  className: styles$e.solutionVideo,
                  children: /* @__PURE__ */ jsx("source", { src: matchingVideo, type: "video/mp4" })
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: styles$e.stepContent, children: [
                /* @__PURE__ */ jsx("div", { className: styles$e.stepNumber, children: "2" }),
                /* @__PURE__ */ jsx("h3", { className: styles$e.sectionTitle, children: "Swipe to Match – AI-Driven & Convenient" }),
                /* @__PURE__ */ jsxs("div", { className: styles$e.sectionGroup, children: [
                  /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "Two Smart Sorting Options – AI ranks matches by distance and compatibility score, ensuring better connections." }),
                  /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: 'Swipe Right to "Swap Your Tail" – An intuitive, swipe-based experience for effortless pet matchmaking.' })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: styles$e.solutionStep, children: [
              /* @__PURE__ */ jsx("div", { className: styles$e.solutionImage, children: /* @__PURE__ */ jsx("img", { src: chattingImage, alt: "Chat & Meet Up" }) }),
              /* @__PURE__ */ jsxs("div", { className: styles$e.stepContent, children: [
                /* @__PURE__ */ jsx("div", { className: styles$e.stepNumber, children: "3" }),
                /* @__PURE__ */ jsx("h3", { className: styles$e.sectionTitle, children: "Chat & Meet Up – Find & Connect Instantly" }),
                /* @__PURE__ */ jsxs("div", { className: styles$e.sectionGroup, children: [
                  /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "Match. Chat. Meet. – Instantly connect with nearby pet owners for a perfect playdate." }),
                  /* @__PURE__ */ jsx("p", { className: styles$e.sectionText, children: "Google Maps Integration – Quickly find dog-friendly parks and walking spots to schedule meetups." })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PetPals,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const sliceAnnotationLarge = "/assets/slice-annotation-large-BMgELH_L.png";
const sliceAnnotationPlaceholder = "/assets/slice-annotation-placeholder-CCGEuhhx.png";
const sliceAnnotation = "/assets/slice-annotation-BYMGWVwS.png";
const sliceAppLarge = "/assets/slice-app-large-CHKPTcWm.jpg";
const sliceAppPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k=";
const sliceApp = "/assets/slice-app-PoRtkkeP.jpg";
const sliceBackgroundBarLarge = "/assets/slice-background-bar-large-CYHGpgXa.jpg";
const sliceBackgroundBarPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCABPACwDAREAAhEBAxEB/8QAGwAAAwEAAwEAAAAAAAAAAAAAAwQFBgECBwD/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/9oADAMBAAIQAxAAAACL730G0hIYHn2inTiJuWej6JekpwuKs/PCbTUcCmk/VsmXNU7HXvJrcyi1OPoOeOfoZLtArotzTXRjDo0RuvTlkL+lXXNdmkdqD4GBTo9CS/T0Ku5zIB5kaXJd0HLVjyYgaJp/SAGNhvMtLmorOawzjfTLNjKfPrTg6FXa3//EACQQAAICAgICAgIDAAAAAAAAAAECAAMEBRESEyEGFCIjMUFR/9oACAEBAAE/AKdw5vDFppvkYFIRnm7NWdUWHuZyHFuJEr27BCnaPkeRy0ov5lGe9R9NMDam/wDWzTYak5WOXUTLwLMe8ggxFPSY1h6w2mam5vsiaahMnA/P/J8l1lVbsygRk6sRMfHISfWZj6E0+vs8oYiYWeMDD4J49TcbUZbkAxMMOvaUETW4yXOOZjYVNGP29TbZbclUMr7vby0xlAxxK6yJrrWrePsm8HXmXP5nJMC9PcXOKL1iY/MxcXgTIBUROe0ChljUDsZV1ESxAssQWQ47f0IK3URi3aWJ0E8rAyq6YFCX/wAyzVVePmPrK+5gzPIse8Ayi3s0xdj9aH5AWTj3DtiTP//EABsRAAMAAwEBAAAAAAAAAAAAAAABAhAREiAh/9oACAECAQE/AOSoI+COcuRyKtCfikUQxZqhzsmdG8NjZK8M0LGjZVCoTz0MSF45NDOhUMWGjg5P/8QAHBEAAwADAQEBAAAAAAAAAAAAAAECAxESEBME/9oACAEDAQE/AOSpEiUcmvNDR1oVeNGikWSJHQ2VXiWjo0V4kPyijQpOT5jbFLZOE+Y1oTQ/zCxaKtI+pdnY2jLRkodaPodEvaMxRSFAsR//2Q==";
const sliceBackgroundBar = "/assets/slice-background-bar-DUyfyeHo.jpg";
const sliceBackgroundLarge = "/assets/slice-background-large-Dnpu52lB.jpg";
const sliceBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIABQAIAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBQABBAL/2gAIAQEAAAAAS2TWvNO0h95v/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIF/9oACAECEAAAANmVL//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAX/2gAIAQMQAAAA22Fn/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAECAwQRIRMiMf/aAAgBAQABPwDHxpTWydTgylbZPSSHmeJ6Qr42x2yPOoi3N6Ll7lXwrIcfD//EABgRAAIDAAAAAAAAAAAAAAAAAAABECFB/9oACAECAQE/ALjBn//EABoRAQADAAMAAAAAAAAAAAAAAAEAAhEDMTP/2gAIAQMBAT8AB3ZbjXLEOiU82f/Z";
const sliceBackground = "/assets/slice-background-5195om16.jpg";
const sliceIrlPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAZAC8DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwUGBAf/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/2gAMAwEAAhADEAAAAImPTmugcIlNVBYmLYBaoxqLJulrSRXpRD1QZLJLrcbz7c2RoclzMNV9Qy6HLRlergJJ/8QAIRAAAQQCAQUBAAAAAAAAAAAAAQACAwQFERIGFCEzNBD/2gAIAQEAAT8Au3JXxb2u9c5/ErGQRzxK9juTzxCsUJIhvSrVnyu0QrJAr6UMQdKsW9sTAFXqG3KNNUvTTJIfITunmwP8BT2TIodmQALBYl8zQ5ypUYakPJWsu1hLQu8E35U97V098jVP85Vz2lVV/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAxAREjH/2gAIAQIBAT8AWpRQmI4JDfBvpKFO7oheiMJ45plmAn4M/8QAHBEAAwACAwEAAAAAAAAAAAAAAAECEBEDEiAh/9oACAEDAQE/AGzeJWxz4RI6N5hFfCrO2YOUYj//2Q==";
const sliceIrl = "/assets/slice-irl-Bok-9coc.jpg";
const sliceSidebarAnnotationsLarge = "/assets/slice-sidebar-annotations-large-CrYJmPog.png";
const sliceSidebarAnnotationsPlaceholder = "/assets/slice-sidebar-annotations-placeholder-Bewc5d-7.png";
const sliceSidebarAnnotations = "/assets/slice-sidebar-annotations-CisIo7UR.png";
const sliceSidebarLayersLarge = "/assets/slice-sidebar-layers-large-CqnA6hBc.png";
const sliceSidebarLayersPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAMAAABCfyqQAAAAxlBMVEUwMDMxMTQ2NjkzMzY4ODs0NDc8PD5CQkU6Oj01NTg/P0I+PkA9PUBEREdFRUdBQUNAQENJSUwyLzBHSEtMTE9HR0k3NDU0MjRIRUU2MC5FRklFQkM8ODhPT1E5Nzc9Vl9RUVRCPDw/ZnM+TVRASk9BRko9QUVFQEBCP0A8OTtFmbJCgpVEdoVAWmM6Rkw2QUZFpsJFjaNFh5s9anhEYms9X2tFVFo4TFRHTVE0O0AzNztJn7hJlKpBfI4/eYtCbnw+Ulo6UVogc3mqAAACmElEQVQ4y+WUW3PaMBCFJVuWZEuWpRiDAwFSKARyvzRNm97//5/qWdmTDAzJQ197XhB8Wu3u2R2YKkmqVKp04yaEL58/Xd59u709v/91xSpFqkiqbEJN8P77+fndj8WcGVOQDFRUypWr5dXi8uLi4ufD1ZIJLaO01tIW3q+vl/PHxcPicf50wxJQY22E8ZH1avl7Pv/zdH3zleVCeuQsEGwov1+vPkJAzxlLtHd13ZTeeFUHHMpxXdertX5OOUvMeHB6Oh04NQ6nOIQwgGqvE4K2xNfQqErV0+k0OOVc6ZQVOedMWFeHMFa+UM10MGhU15kUOSJzYXxVeSul9XCqkALSWogk4yyjXqgTaklK/AYlCcGUcaJkQn895VCa5Qk9y3meSCSxxHMgBhHGkaAwKA+FdEVE2AmHTFhVVt5YjRoIQj0jaAALK0WEO+Jpoo1BwgMsVoRCkxwJCe6Hoq+864Hti/oCOYQAX3SIpaSDOFoFZVm8wHZMQDVaw/d4AbhnXXmj2XazqWiAfaORZRCsHG43bRucg31WJGkHY6YM8OSsbVv43kNOFeYCylPAD5NJO1Hee0POQ4DJCzwjCHkZh91H4tzBxrlx3ShDFqcpQa3xDKoFbSfYZaeMJJqhOyEllpONELqhVXVYPWsl1gFtIGeMzGZbW6mKVkFqSbHwCq1QQTzFG0VVFEBCgEZInmYEc0CFtUYMQU0VEyVIoVZV2HWC1iDpC2R8NJxJpUplYT6wiJEZIGdHR8cjQNc48gCF9Cnpk+DxzLgwCGWBoDhWNAqhWrDj4YmpSlgAa1+9xc0YORpuZb/wcSr9yBAJjUa4Ct8I7Qw70rhjrwu2t417q9ez/1H8HUR6k71D+380/hbMif5D5IGcfwHADy8o/7eiGAAAAABJRU5ErkJggg==";
const sliceSidebarLayers = "/assets/slice-sidebar-layers-jDBpAmZU.png";
const sliceSlidesLarge = "/assets/slice-slides-large--yrOgN_x.jpg";
const sliceSlidesPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAoAEADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgQBAwUG/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/9oADAMBAAIQAxAAAACwM4raZJhGZEsVgO5z2cq+7o358vKdkuGjLcN1R62nHXpwk85e7UptZbSwpDtSdLuzznc4LFgNZ9qtGNSPLXijGpyLGXSYDZvKP//EACMQAAEEAgEEAwEAAAAAAAAAAAIAAQMEBREGEiExQQcTFiL/2gAIAQEAAT8Al+P5kfEWCX69r8Q6bgqHgRGvwJqfihwvpQcQOyWlyHkX1kUMSr2p5LjGW0EdmZmcUVe7Ht++kOVmhMg9qPMWzsOqEz25iaQVXnOLLNEw9tq7Rglum5l7VPGUndi23ZNbp1R02n0mydawDg2tujwTHIUu/KhxAQG5Eq0taqbvpVmqT22kZm6lkMLKM5yMgp2I/G2UeKszuocDJE/Up2mh/l3QxyTA6Ku/WTEsfG0dkVaz9UZnidSWoJwYgdmUOTrxhpHm4RV7kFQi0qWcrE3Q3tTuDy+fKoUOsxNnX//EAB0RAQEBAQABBQAAAAAAAAAAAAEAEgIQAxEhMEH/2gAIAQIBAT8A+ss2SS/LUMcLYS3PVlvZsxHYE+p5JPiOGeGw2PJ1Pd//xAAeEQADAQEAAgMBAAAAAAAAAAAAAQIRAwQSEyExEP/aAAgBAwEBPwAXKs09GejM/k82yubRw8fftlQlJWI+j40z40UvVFLY0h0pLu0P2ZjFZrY4poapI5+QmsLuWiqWnuRjNSFRdaiebI1fpUNsXNkcaL41+ky8LrD/2Q==";
const sliceSlides = "/assets/slice-slides-me7j0Hig.jpg";
const columns = "_columns_sh3b4_1";
const grid = "_grid_sh3b4_5";
const gridImage = "_gridImage_sh3b4_16";
const gridBackground = "_gridBackground_sh3b4_28";
const gridForeground = "_gridForeground_sh3b4_41";
const gridText = "_gridText_sh3b4_57";
const sidebarImages = "_sidebarImages_sh3b4_69";
const sidebarImage = "_sidebarImage_sh3b4_69";
const styles$d = {
  columns,
  grid,
  gridImage,
  gridBackground,
  gridForeground,
  gridText,
  sidebarImages,
  sidebarImage
};
const title$3 = "Biomedical image collaboration";
const description$1 = "This project involved designing a better way for biomedical educators and learners to annotate digital slides together.";
const roles = ["User Research", "UX Design", "Interface Design"];
const meta$5 = () => {
  return baseMeta({ title: title$3, description: description$1, prefix: "Projects" });
};
const Slice = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$d.slice, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: sliceBackground,
          srcSet: `${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: sliceBackgroundPlaceholder,
          opacity: 0.8
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$3,
          description: description$1,
          url: "https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1",
          roles
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${sliceApp} 800w, ${sliceAppLarge} 1920w`,
          width: 800,
          height: 500,
          placeholder: sliceAppPlaceholder,
          alt: "The Slice web application showing a selected user annotation.",
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { centered: true, className: styles$d.columns, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$d.imagesText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Bringing it together" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Teachers needed a better way to create collaborative group activities by annotating slides on Slice. Before starting this project, a layer could only be annotated by a single user, making it difficult for learners to work together." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Our solution was to allow users to be invited to a layer, where they can see others’ annotations and make their own." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$d.sidebarImages, children: [
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$d.sidebarImage,
              srcSet: `${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`,
              width: 350,
              height: 750,
              placeholder: sliceSidebarLayersPlaceholder,
              alt: "The layers sidebar design, now with user profiles.",
              sizes: `(max-width: ${media.mobile}px) 200px, 343px`
            }
          ),
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$d.sidebarImage,
              srcSet: `${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`,
              width: 350,
              height: 750,
              placeholder: sliceSidebarAnnotationsPlaceholder,
              alt: "Multiple user annotations on a shared layer.",
              sizes: `(max-width: ${media.mobile}px) 200px, 343px`
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: true, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Improving the experience" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A problem we heard about often form users was that it was difficult to find images they had previously seen or worked on. To solve this we added a new tab that lists all previously annotated slides. In addition, we added the ability to favorite slides, so if users find an interesting slide they want to annotate later, they can easily save it to their account." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: `${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`,
            width: 800,
            height: 500,
            placeholder: sliceSlidesPlaceholder,
            alt: "The new My Slides tab in slice, showing annotated and favorited slides.",
            sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsxs(ProjectSectionContent, { className: styles$d.grid, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$d.gridImage, children: [
          /* @__PURE__ */ jsx("div", { className: styles$d.gridBackground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`,
              width: 440,
              height: 790,
              placeholder: sliceBackgroundBarPlaceholder,
              alt: "",
              role: "presentation",
              sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: styles$d.gridForeground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`,
              width: 440,
              height: 340,
              placeholder: sliceAnnotationPlaceholder,
              alt: "An annotation preview popover with statistics for shape perimeter and area.",
              sizes: `(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$d.gridText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Meaningful details" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Marking and annotating areas on high resolution biomedical images is the core experience of the app, and it was easy to get lost or lose sense of scale when zooming in on details. Adding measurements for the perimeter and area of an annotation both helped to communicate the overall scale of the image and how large the annotated feature is in comparison." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project outcomes" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Real-time collaborative annotation facilitated better collaboration between learners, and was much easier to run group exercises with the new shared layers feature. Learners gave feedback that is was enjoyable to work together and see what others were doing, and liked how interactive and easy to use the application was." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            src: sliceIrl,
            width: 940,
            height: 500,
            placeholder: sliceIrlPlaceholder,
            alt: "Students at the University of New South Wales using the new collaborative annotation features"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Slice,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
async function action$1({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: "Module" }));
const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};
const post = "_post_kr7uo_20";
const header = "_header_kr7uo_44";
const headerText = "_headerText_kr7uo_55";
const date = "_date_kr7uo_79";
const dateText = "_dateText_kr7uo_91";
const titleWordWrapper = "_titleWordWrapper_kr7uo_118";
const titleWord = "_titleWord_kr7uo_118";
const banner = "_banner_kr7uo_138";
const bannerImage = "_bannerImage_kr7uo_190";
const bannerImageBlur = "_bannerImageBlur_kr7uo_191";
const details$1 = "_details_kr7uo_202";
const arrow = "_arrow_kr7uo_209";
const timecode = "_timecode_kr7uo_233";
const wrapper = "_wrapper_kr7uo_254";
const content$2 = "_content_kr7uo_266";
const styles$c = {
  post,
  header,
  headerText,
  date,
  dateText,
  titleWordWrapper,
  titleWord,
  banner,
  bannerImage,
  bannerImageBlur,
  details: details$1,
  arrow,
  timecode,
  wrapper,
  content: content$2
};
const Post = ({ children, title: title2, date: date2, banner: banner2, timecode: timecode2 }) => {
  const scrollToHash = useScrollToHash();
  const imageRef = useRef();
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  useParallax(4e-3, (value2) => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty("--blurOpacity", clamp(value2, 0, 1));
  });
  const handleScrollIndicatorClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  const placeholder2 = `${banner2 == null ? void 0 : banner2.split(".")[0]}-placeholder.jpg`;
  return /* @__PURE__ */ jsxs("article", { className: styles$c.post, children: [
    /* @__PURE__ */ jsxs(Section, { children: [
      banner2 && /* @__PURE__ */ jsxs("div", { className: styles$c.banner, ref: imageRef, children: [
        /* @__PURE__ */ jsx("div", { className: styles$c.bannerImage, children: /* @__PURE__ */ jsx(Image$1, { role: "presentation", src: banner2, placeholder: placeholder2, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: styles$c.bannerImageBlur, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            role: "presentation",
            src: placeholder2,
            placeholder: placeholder2,
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("header", { className: styles$c.header, children: /* @__PURE__ */ jsxs("div", { className: styles$c.headerText, children: [
        /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$c.date, ref: nodeRef, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px", collapsed: !visible2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$c.dateText, "data-visible": visible2, children: dateTime })
        ] }) }),
        /* @__PURE__ */ jsx(Heading, { level: 2, as: "h1", className: styles$c.title, "aria-label": title2, children: title2.split(" ").map((word2, index2) => /* @__PURE__ */ jsx("span", { className: styles$c.titleWordWrapper, children: /* @__PURE__ */ jsxs(
          "span",
          {
            className: styles$c.titleWord,
            style: cssProps({ delay: numToMs(index2 * 100 + 100) }),
            children: [
              word2,
              index2 !== title2.split(" ").length - 1 ? " " : ""
            ]
          }
        ) }, `${word2}-${index2}`)) }),
        /* @__PURE__ */ jsxs("div", { className: styles$c.details, children: [
          /* @__PURE__ */ jsx(
            Link$1,
            {
              to: "#postContent",
              className: styles$c.arrow,
              "aria-label": "Scroll to post content",
              onClick: handleScrollIndicatorClick,
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$c.timecode, children: timecode2 })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: styles$c.wrapper, id: "postContent", tabIndex: -1, children: /* @__PURE__ */ jsx(Text, { as: "div", size: "l", className: styles$c.content, children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const code$1 = "_code_113ft_2";
const actions = "_actions_113ft_159";
const copyIcon = "_copyIcon_113ft_176";
const lang = "_lang_113ft_198";
const styles$b = {
  code: code$1,
  actions,
  copyIcon,
  lang
};
const Code = (props) => {
  var _a;
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const elementRef = useRef();
  const copyTimeout = useRef();
  const lang2 = (_a = props.className) == null ? void 0 : _a.split("-")[1];
  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$b.code, "data-theme": theme, children: [
    !!lang2 && /* @__PURE__ */ jsx(Text, { secondary: true, size: "s", className: styles$b.lang, children: lang2 }),
    /* @__PURE__ */ jsx("pre", { ref: elementRef, ...props }),
    /* @__PURE__ */ jsx("div", { className: styles$b.actions, children: /* @__PURE__ */ jsx(Button, { iconOnly: true, onClick: handleCopy, "aria-label": "Copy", children: /* @__PURE__ */ jsxs("span", { className: styles$b.copyIcon, children: [
      /* @__PURE__ */ jsx(Transition, { in: !copied, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "copy", "data-visible": visible2 }) }),
      /* @__PURE__ */ jsx(Transition, { in: copied, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "check", "data-visible": visible2 }) })
    ] }) }) })
  ] });
};
const list$1 = "_list_1ecfb_2";
const item = "_item_1ecfb_15";
const styles$a = {
  list: list$1,
  item
};
const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(Element, { className: classes(styles$a.list, className), ...rest, children });
};
const ListItem = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx("li", { className: styles$a.item, ...rest, children });
};
const heading = "_heading_69uyj_2";
const paragraph = "_paragraph_69uyj_14";
const list = "_list_69uyj_14";
const image = "_image_69uyj_14";
const headingLink = "_headingLink_69uyj_19";
const code = "_code_69uyj_72";
const pre = "_pre_69uyj_90";
const hr = "_hr_69uyj_106";
const blockquote = "_blockquote_69uyj_120";
const strong = "_strong_69uyj_139";
const embed = "_embed_69uyj_143";
const styles$9 = {
  heading,
  paragraph,
  list,
  image,
  headingLink,
  code,
  pre,
  hr,
  blockquote,
  strong,
  embed
};
const PostHeadingLink = ({ id }) => {
  return /* @__PURE__ */ jsx(Link$1, { className: styles$9.headingLink, to: `#${id}`, "aria-label": "Link to heading", children: /* @__PURE__ */ jsx(Icon, { icon: "link" }) });
};
const PostH1 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 2, as: "h1", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH2 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 3, as: "h2", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH3 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 4, as: "h3", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH4 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 5, as: "h4", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }
  return /* @__PURE__ */ jsx(Text, { className: styles$9.paragraph, size: "l", as: "p", ...rest, children });
};
const PostLink = ({ ...props }) => /* @__PURE__ */ jsx(Link, { ...props });
const PostUl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$9.list, ...props });
};
const PostOl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$9.list, ordered: true, ...props });
};
const PostLi = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(ListItem, { ...props, children });
};
const PostCode = ({ children, ...rest }) => /* @__PURE__ */ jsx("code", { className: styles$9.code, ...rest, children });
const PostPre = (props) => {
  return /* @__PURE__ */ jsx("div", { className: styles$9.pre, children: /* @__PURE__ */ jsx(Code, { ...props }) });
};
const PostBlockquote = (props) => {
  return /* @__PURE__ */ jsx("blockquote", { className: styles$9.blockquote, ...props });
};
const PostHr = (props) => {
  return /* @__PURE__ */ jsx("hr", { className: styles$9.hr, ...props });
};
const PostStrong = (props) => {
  return /* @__PURE__ */ jsx("strong", { className: styles$9.strong, ...props });
};
const PostImage = ({ src, alt, width, height, ...rest }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      className: styles$9.image,
      src,
      loading: "lazy",
      alt,
      width,
      height,
      ...rest
    }
  );
};
const Embed = ({ src }) => {
  return /* @__PURE__ */ jsx("div", { className: styles$9.embed, children: /* @__PURE__ */ jsx("iframe", { src, loading: "lazy", title: "Embed" }) });
};
const postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  pre: PostPre,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed
};
async function loader$2({ request }) {
  const slug = request.url.split("/").at(-1);
  const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.hello-world.mdx": () => Promise.resolve().then(() => route8), "../articles.modern-styling-in-react.mdx": () => Promise.resolve().then(() => route1) }), `../articles.${slug}.mdx`, 2);
  const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.hello-world.mdx": () => import("./articles.hello-world-C3lWsiOj.js"), "../articles.modern-styling-in-react.mdx": () => import("./articles.modern-styling-in-react-D1jt5bSr.js") }), `../articles.${slug}.mdx`, 2);
  const readTime = readingTime(text2.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;
  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime)
  });
}
function meta$4({ data }) {
  const { title: title2, abstract } = data.frontmatter;
  return baseMeta({ title: title2, description: abstract, prefix: "", ogImage: data.ogImage });
}
function Articles() {
  const { frontmatter: frontmatter2, timecode: timecode2 } = useLoaderData();
  return /* @__PURE__ */ jsx(MDXProvider, { components: postMarkdown, children: /* @__PURE__ */ jsx(Post, { ...frontmatter2, timecode: timecode2, children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles,
  loader: loader$2,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const textarea = "_textarea_1ly3z_2";
const styles$8 = {
  textarea
};
const TextArea = ({
  className,
  resize = "none",
  value: value2,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  const [rows, setRows] = useState(minRows);
  const [textareaDimensions, setTextareaDimensions] = useState();
  const textareaRef = useRef();
  useEffect(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({ lineHeight, paddingHeight });
  }, []);
  const handleChange = (event) => {
    onChange(event);
    const { lineHeight, paddingHeight } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: classes(styles$8.textarea, className),
      ref: textareaRef,
      onChange: handleChange,
      style: cssProps({ resize }),
      rows,
      value: value2,
      ...rest
    }
  );
};
const container = "_container_1ukhq_2";
const content$1 = "_content_1ukhq_16";
const input$1 = "_input_1ukhq_21";
const underline = "_underline_1ukhq_55";
const label = "_label_1ukhq_73";
const error = "_error_1ukhq_95";
const errorMessage = "_errorMessage_1ukhq_111";
const styles$7 = {
  container,
  content: content$1,
  input: input$1,
  underline,
  label,
  error,
  errorMessage
};
const Input = ({
  id,
  label: label2,
  value: value2,
  multiline,
  className,
  style,
  error: error2,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  name: name2,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const errorRef = useRef();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? TextArea : "input";
  const handleBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$7.container, className),
      "data-error": !!error2,
      style,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$7.content, children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: styles$7.label,
              "data-focused": focused,
              "data-filled": !!value2,
              id: labelId,
              htmlFor: inputId,
              children: label2
            }
          ),
          /* @__PURE__ */ jsx(
            InputElement,
            {
              className: styles$7.input,
              id: inputId,
              "aria-labelledby": labelId,
              "aria-describedby": error2 ? errorId : void 0,
              onFocus: () => setFocused(true),
              onBlur: handleBlur,
              value: value2,
              onChange,
              autoComplete,
              required,
              maxLength,
              type,
              name: name2
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$7.underline, "data-focused": focused })
        ] }),
        /* @__PURE__ */ jsx(Transition, { unmount: true, in: error2, timeout: msToNum(tokens.base.durationM), children: ({ visible: visible2, nodeRef }) => {
          var _a;
          return /* @__PURE__ */ jsx(
            "div",
            {
              ref: nodeRef,
              className: styles$7.error,
              "data-visible": visible2,
              id: errorId,
              role: "alert",
              style: cssProps({
                height: visible2 ? (_a = errorRef.current) == null ? void 0 : _a.getBoundingClientRect().height : 0
              }),
              children: /* @__PURE__ */ jsxs("div", { className: styles$7.errorMessage, ref: errorRef, children: [
                /* @__PURE__ */ jsx(Icon, { icon: "error" }),
                error2
              ] })
            }
          );
        } })
      ]
    }
  );
};
const contact = "_contact_1529k_1";
const form = "_form_1529k_18";
const title$2 = "_title_1529k_30";
const divider = "_divider_1529k_60";
const input = "_input_1529k_98";
const botkiller = "_botkiller_1529k_140";
const button$1 = "_button_1529k_144";
const complete = "_complete_1529k_204";
const completeTitle = "_completeTitle_1529k_215";
const completeText = "_completeText_1529k_234";
const completeButton = "_completeButton_1529k_253";
const formError = "_formError_1529k_279";
const formErrorContent = "_formErrorContent_1529k_291";
const formErrorMessage = "_formErrorMessage_1529k_295";
const formErrorIcon = "_formErrorIcon_1529k_303";
const contactWrapper = "_contactWrapper_1529k_316";
const contactInfo = "_contactInfo_1529k_326";
const contactText = "_contactText_1529k_350";
const contactLink = "_contactLink_1529k_366";
const emoji = "_emoji_1529k_380";
const styles$6 = {
  contact,
  form,
  title: title$2,
  divider,
  input,
  botkiller,
  button: button$1,
  complete,
  completeTitle,
  completeText,
  completeButton,
  formError,
  formErrorContent,
  formErrorMessage,
  formErrorIcon,
  contactWrapper,
  contactInfo,
  contactText,
  contactLink,
  emoji
};
const meta$3 = () => {
  return baseMeta({
    title: "Contact",
    description: "Send me a message if you‘re interested in discussing a project or if you just want to say hi"
  });
};
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;
async function action({ context, request }) {
  const ses = new SESClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: context.cloudflare.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: context.cloudflare.env.AWS_SECRET_ACCESS_KEY
    }
  });
  const formData = await request.formData();
  const isBot = String(formData.get("name"));
  const email = String(formData.get("email"));
  const message = String(formData.get("message"));
  const errors = {};
  if (isBot) return json({ success: true });
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) {
    errors.message = "Please enter a message.";
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }
  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  await ses.send(
    new SendEmailCommand({
      Destination: {
        ToAddresses: [context.cloudflare.env.EMAIL]
      },
      Message: {
        Body: {
          Text: {
            Data: `From: ${email}

${message}`
          }
        },
        Subject: {
          Data: `Portfolio message from ${email}`
        }
      },
      Source: `Portfolio <${context.cloudflare.env.FROM_EMAIL}>`,
      ReplyToAddresses: [email]
    })
  );
  return json({ success: true });
}
const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput("");
  const message = useFormInput("");
  const initDelay2 = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === "submitting";
  return /* @__PURE__ */ jsx(Section, { className: styles$6.contact, children: /* @__PURE__ */ jsxs("div", { className: styles$6.contactWrapper, children: [
    /* @__PURE__ */ jsx(Transition, { in: true, appear: true, children: ({ status }) => /* @__PURE__ */ jsxs("div", { className: styles$6.contactInfo, "data-status": status, children: [
      /* @__PURE__ */ jsxs(Text, { className: styles$6.contactText, children: [
        /* @__PURE__ */ jsx("span", { className: styles$6.emoji, children: "👾" }),
        "Hey there—welcome to my little slice of the internet!",
        /* @__PURE__ */ jsx("span", { className: styles$6.emoji, children: "👾" })
      ] }),
      /* @__PURE__ */ jsx(Text, { className: styles$6.contactText, children: "I cooked this site up with React, Remix, Three.js, and Framer Motion." }),
      /* @__PURE__ */ jsxs(Text, { className: styles$6.contactText, children: [
        "Everything's open source on my",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/Qiqicoder/portfolio",
            target: "_blank",
            rel: "noopener noreferrer",
            className: styles$6.contactLink,
            children: "Github"
          }
        ),
        ", so if you're curious about the code or just want to chat about blending creativity and tech, let's connect!"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Transition, { unmount: true, in: !(actionData == null ? void 0 : actionData.success), timeout: 1600, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs(
        Form,
        {
          unstable_viewTransition: true,
          className: styles$6.form,
          method: "post",
          ref: nodeRef,
          children: [
            /* @__PURE__ */ jsx(
              Heading,
              {
                className: styles$6.title,
                "data-status": status,
                level: 3,
                as: "h1",
                style: getDelay(tokens.base.durationXS, initDelay2, 0.3),
                children: /* @__PURE__ */ jsx(DecoderText, { text: "Let's chat!", start: status !== "exited", delay: 300 })
              }
            ),
            /* @__PURE__ */ jsx(
              Divider,
              {
                className: styles$6.divider,
                "data-status": status,
                style: getDelay(tokens.base.durationXS, initDelay2, 0.4)
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                className: styles$6.botkiller,
                label: "Name",
                name: "name",
                maxLength: MAX_EMAIL_LENGTH
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                className: styles$6.input,
                "data-status": status,
                style: getDelay(tokens.base.durationXS, initDelay2),
                autoComplete: "email",
                label: "Your email",
                type: "email",
                name: "email",
                maxLength: MAX_EMAIL_LENGTH,
                ...email
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                multiline: true,
                className: styles$6.input,
                "data-status": status,
                style: getDelay(tokens.base.durationS, initDelay2),
                autoComplete: "off",
                label: "Message",
                name: "message",
                maxLength: MAX_MESSAGE_LENGTH,
                ...message
              }
            ),
            /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: !sending && (actionData == null ? void 0 : actionData.errors),
                timeout: msToNum(tokens.base.durationM),
                children: ({ status: errorStatus, nodeRef: nodeRef2 }) => {
                  var _a, _b, _c;
                  return /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: styles$6.formError,
                      ref: nodeRef2,
                      "data-status": errorStatus,
                      style: cssProps({
                        height: errorStatus ? (_a = errorRef.current) == null ? void 0 : _a.offsetHeight : 0
                      }),
                      children: /* @__PURE__ */ jsx("div", { className: styles$6.formErrorContent, ref: errorRef, children: /* @__PURE__ */ jsxs("div", { className: styles$6.formErrorMessage, children: [
                        /* @__PURE__ */ jsx(Icon, { className: styles$6.formErrorIcon, icon: "error" }),
                        (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email,
                        (_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.message
                      ] }) })
                    }
                  );
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                className: styles$6.button,
                "data-status": status,
                "data-sending": sending,
                style: getDelay(tokens.base.durationM, initDelay2),
                disabled: sending,
                loading: sending,
                loadingText: "Sending...",
                icon: "send",
                type: "submit",
                children: "Send message"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Transition, { unmount: true, in: actionData == null ? void 0 : actionData.success, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$6.complete, "aria-live": "polite", ref: nodeRef, children: [
        /* @__PURE__ */ jsx(
          Heading,
          {
            level: 3,
            as: "h3",
            className: styles$6.completeTitle,
            "data-status": status,
            children: "Message Sent"
          }
        ),
        /* @__PURE__ */ jsx(
          Text,
          {
            size: "l",
            as: "p",
            className: styles$6.completeText,
            "data-status": status,
            style: getDelay(tokens.base.durationXS),
            children: "I'll get back to you within a couple days, sit tight"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$6.completeButton,
            "data-status": status,
            style: getDelay(tokens.base.durationM),
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) })
    ] })
  ] }) });
};
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Contact,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const adaptiveUIMain = "/assets/adaptive-ui-main-Ct5E01jK.jpg";
const adaptiveUIDetail = "/assets/adaptive-ui-detail-BIf9r9ml.jpg";
const philipsLogo = "/assets/Philips-BZ2LDZ7Q.png";
const philipsSRCLogo = "/assets/SRC-COLrwyzj.png";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const intro = "_intro_73p3v_1";
const text = "_text_73p3v_9";
const name = "_name_73p3v_36";
const title$1 = "_title_73p3v_74";
const row$1 = "_row_73p3v_96";
const word = "_word_73p3v_125";
const line = "_line_73p3v_214";
const scrollIndicator = "_scrollIndicator_73p3v_263";
const mobileScrollIndicator = "_mobileScrollIndicator_73p3v_330";
const styles$5 = {
  intro,
  text,
  name,
  title: title$1,
  row: row$1,
  word,
  line,
  scrollIndicator,
  mobileScrollIndicator
};
const DisplacementSphere = lazy(
  () => import("./displacement-sphere-Arcu_XPa.js").then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item2, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      if (index2 === 0) {
        setDisciplineIndex(0);
      } else {
        setDisciplineIndex(index2);
      }
    },
    3e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$5.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible: visible2, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
        /* @__PURE__ */ jsxs("header", { className: styles$5.text, children: [
          /* @__PURE__ */ jsx("h1", { className: styles$5.name, "data-visible": visible2, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: config.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs(Heading, { level: 0, as: "h2", className: styles$5.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$5.label, children: `${config.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$5.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$5.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config.role
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$5.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$5.row, children: disciplines2.map((item2) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item2 === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$5.word,
                    "data-plus": true,
                    "data-status": status2,
                    style: cssProps({ delay: tokens.base.durationL }),
                    children: item2
                  }
                )
              },
              item2
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$5.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$5.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const quest3Model = "/assets/quest3-BnjzVqgT.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open",
  Quest3Rotate: "quest3-rotate"
};
const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  },
  quest3: {
    url: quest3Model,
    position: { x: -0.15, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 }
  }
};
const summary = "_summary_ts45g_1";
const content = "_content_ts45g_36";
const details = "_details_ts45g_66";
const preview = "_preview_ts45g_82";
const model = "_model_ts45g_94";
const loader$1 = "_loader_ts45g_150";
const index = "_index_ts45g_200";
const indexNumber = "_indexNumber_ts45g_209";
const title = "_title_ts45g_230";
const description = "_description_ts45g_250";
const button = "_button_ts45g_269";
const tag = "_tag_ts45g_288";
const projectLogos = "_projectLogos_ts45g_318";
const logoWrapper = "_logoWrapper_ts45g_345";
const projectLogo = "_projectLogo_ts45g_318";
const imageContainer = "_imageContainer_ts45g_455";
const projectImage = "_projectImage_ts45g_468";
const tags = "_tags_ts45g_525";
const styles$4 = {
  summary,
  content,
  details,
  preview,
  model,
  loader: loader$1,
  index,
  indexNumber,
  title,
  description,
  button,
  tag,
  projectLogos,
  logoWrapper,
  projectLogo,
  imageContainer,
  projectImage,
  tags
};
const Model = lazy(
  () => import("./index-Ds73kvE1.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonLink,
  alternate,
  category,
  images,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderDetails(visible2) {
    return /* @__PURE__ */ jsxs("div", { className: styles$4.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$4.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible2,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$4.indexNumber, "data-visible": visible2, children: `${category} ${indexText}` })
      ] }),
      title2 === "Adaptive UI for Sleep & Respiratory Care" && /* @__PURE__ */ jsxs("div", { className: styles$4.projectLogos, "data-visible": visible2, children: [
        /* @__PURE__ */ jsx("div", { className: styles$4.logoWrapper, "data-logo": "philips", children: /* @__PURE__ */ jsx("img", { src: philipsLogo, alt: "Philips Logo", className: styles$4.projectLogo }) }),
        /* @__PURE__ */ jsx("div", { className: styles$4.logoWrapper, "data-logo": "respironics", children: /* @__PURE__ */ jsx("img", { src: philipsSRCLogo, alt: "Philips Sleep & Respiratory Care Logo", className: styles$4.projectLogo }) })
      ] }),
      title2 === "Bike-Sharing in Epidemic Era" && /* @__PURE__ */ jsx("div", { className: styles$4.projectLogos, "data-visible": visible2, children: /* @__PURE__ */ jsx("div", { className: styles$4.logoWrapper, "data-logo": "bike", children: /* @__PURE__ */ jsx("img", { src: bikelogo, alt: "Bike-sharing Logo", className: styles$4.projectLogo }) }) }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles$4.title,
          "data-visible": visible2,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$4.description, "data-visible": visible2, as: "p", children: description2 }),
      /* @__PURE__ */ jsx("div", { className: styles$4.tags, "data-visible": visible2, children: title2 === "MR Finder: Mixed Reality Lost & Found" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Mixed Reality" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "ChatGPT Voice" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "SLAM Mapping" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Unity MRTK" })
      ] }) : title2 === "Infrastructure Equality" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Python" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Evolutionary Algorithm" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Cost-Benefit Model" })
      ] }) : title2 === "Heritage Knowledge Explorer" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "TextCNN" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Storytelling" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Knowledge Graph" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "User Flow" })
      ] }) : title2 === "Bike-Sharing in Epidemic Era" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Python" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "SHAP" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "User Research" })
      ] }) : title2 === "Adaptive UI for Sleep & Respiratory Care" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Co-Creation" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "User Testing" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Proactive Intelligence" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Healthcare" })
      ] }) : title2 === "Fireboy & Watergirl" ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Python" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Game Development" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Dual-Player" })
      ] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Frontend" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "UI/UX Design" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "React.js" }),
        /* @__PURE__ */ jsx("span", { className: styles$4.tag, children: "Django" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: styles$4.button, "data-visible": visible2, children: /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible2) {
    var _a;
    return /* @__PURE__ */ jsxs("div", { className: styles$4.preview, children: [
      (model2 == null ? void 0 : model2.type) === "laptop" && /* @__PURE__ */ jsxs("div", { className: styles$4.model, "data-device": "laptop", style: { transform: "scale(0.8)" }, children: [
        !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$4.loader, "data-visible": visible2 }),
        isHydrated && visible2 && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
          Model,
          {
            alt: model2.alt,
            cameraPosition: { x: 0, y: 0, z: 6 },
            showDelay: 700,
            onLoad: handleModelLoad,
            show: visible2,
            models: [
              {
                ...deviceModels.laptop,
                texture: model2.video ? {
                  type: "video",
                  src: model2.video,
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true
                } : {
                  ...(_a = model2.textures) == null ? void 0 : _a[0],
                  sizes: laptopSizes
                }
              }
            ]
          }
        ) })
      ] }),
      (model2 == null ? void 0 : model2.type) === "phone" && /* @__PURE__ */ jsxs("div", { className: styles$4.model, "data-device": "phone", children: [
        !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$4.loader, "data-visible": visible2 }),
        isHydrated && visible2 && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
          Model,
          {
            alt: model2.alt,
            cameraPosition: { x: 0, y: 0, z: 10 },
            showDelay: 300,
            onLoad: handleModelLoad,
            show: visible2,
            models: [
              {
                ...deviceModels.phone,
                position: { x: -0.6, y: 1.1, z: 0 },
                texture: {
                  ...model2.textures[0],
                  sizes: phoneSizes
                }
              },
              {
                ...deviceModels.phone,
                position: { x: 0.6, y: -0.5, z: 0.3 },
                texture: {
                  ...model2.textures[1],
                  sizes: phoneSizes
                }
              }
            ]
          }
        ) })
      ] }),
      (model2 == null ? void 0 : model2.type) === "quest3" && /* @__PURE__ */ jsxs("div", { className: styles$4.model, "data-device": "quest3", children: [
        !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$4.loader, "data-visible": visible2 }),
        isHydrated && visible2 && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
          Model,
          {
            alt: model2.alt,
            cameraPosition: { x: 0, y: 0, z: 0.6 },
            showDelay: 300,
            onLoad: () => {
              console.log("Quest3 model loaded successfully");
              handleModelLoad();
            },
            show: visible2,
            models: [
              {
                type: "quest3",
                url: deviceModels.quest3.url,
                position: deviceModels.quest3.position,
                rotation: deviceModels.quest3.rotation,
                scale: deviceModels.quest3.scale,
                animation: ModelAnimationType.Quest3Rotate
              }
            ]
          }
        ) })
      ] }),
      !model2 && images && /* @__PURE__ */ jsx("div", { className: styles$4.imageContainer, children: images.map((image5, index22) => /* @__PURE__ */ jsx(
        "img",
        {
          src: image5.src,
          alt: image5.alt,
          className: styles$4.projectImage,
          "data-visible": visible2,
          "data-index": index22
        },
        index22
      )) })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$4.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$4.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, timeout: 0, children: ({ visible: visible2, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible2),
          /* @__PURE__ */ jsx("div", { style: {
            transitionDelay: "200ms",
            // 与 title 同步出现
            opacity: visible2 ? 1 : 0,
            transition: "opacity 0.3s ease"
          }, children: renderPreview(visible2) })
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible2),
          renderDetails(visible2)
        ] })
      ] }) }) })
    }
  );
}
const home = "_home_ng5zc_1";
const styles$3 = {
  home
};
const sectionTitle = "_sectionTitle_njqps_1";
const styles$2 = {
  sectionTitle
};
const SectionTitle = () => {
  return /* @__PURE__ */ jsx("h1", { className: styles$2.sectionTitle, children: "WORK" });
};
const data4Image = "/assets/data4_1-DOQAK2wL.jpg";
const data4_4Image = "/assets/data4_4-DLU0q9eT.jpg";
const data5Image = "/assets/data5_5-CigD_tUS.jpg";
const data5_2Image = "/assets/data5_2-oC_v5bIC.jpg";
const data6Image = "/assets/data6_2-DChBc9mf.jpg";
const data6_1Image = "/assets/data6_1-BjLtPq_I.jpg";
const data7_1Image = "/assets/7.1-HWCGKk1P.png";
const data7Image = "/assets/7.2-14y8m2Fl.png";
const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low"
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low"
    }
  ];
};
const meta$2 = () => {
  return baseMeta({
    title: "Designer + Developer",
    description: `Design portfolio of ${config.name} — a computational designer working on web & mobile apps with a focus on AI, Data-driven,motion, experience design, and accessibility.`
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const contact2 = useRef();
  const sectionRefs = [
    intro2,
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix,
    projectSeven,
    contact2
  ];
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2)) return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sectionRefs.forEach((section2) => {
      if (section2.current) {
        sectionObserver.observe(section2.current);
      }
    });
    if (intro2.current) {
      indicatorObserver.observe(intro2.current);
    }
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles$3.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(SectionTitle, {}),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "ai-product",
        sectionRef: projectOne,
        visible: visibleSections.includes(projectOne.current),
        index: 1,
        category: "AI Product",
        title: "PetPals",
        description: "An AI-powered platform that helps pets seamlessly connect, find nearby playmates, and join vibrant pet communities.",
        buttonText: "View project",
        buttonLink: "/projects/petpals",
        model: {
          type: "laptop",
          alt: "PetPals web application interface",
          video: matchingVideo
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "data-narratives",
        alternate: true,
        sectionRef: projectTwo,
        visible: visibleSections.includes(projectTwo.current),
        index: 2,
        category: "AI Product",
        title: "Adaptive UI for Sleep & Respiratory Care",
        description: "An AI-driven initiative at Philips—combining an Adaptive UI workshop I led and collaborative user testing with fellow designers, to deliver personalized, compliant interfaces for CPAP devices.",
        buttonText: "View project",
        buttonLink: "/projects/adaptive-ui",
        model: {
          type: "phone",
          alt: "Adaptive UI for medical devices interface",
          scale: 0.8,
          textures: [
            {
              srcSet: `${adaptiveUIMain} 375w, ${adaptiveUIMain} 750w`,
              placeholder: adaptiveUIMain
            },
            {
              srcSet: `${adaptiveUIDetail} 375w, ${adaptiveUIDetail} 750w`,
              placeholder: adaptiveUIDetail
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "vr-project",
        sectionRef: projectThree,
        visible: visibleSections.includes(projectThree.current),
        index: 3,
        category: "AI Product",
        title: "MR Finder: Mixed Reality Lost & Found",
        description: "An AI-powered XR solution merging ChatGPT voice commands and SLAM-based spatial mapping, giving you real-time guidance to find lost items around you.",
        buttonText: "View project",
        buttonLink: "/projects/mr-finder",
        model: {
          type: "quest3",
          alt: "Quest3 VR headset demonstrating MR Finder application",
          scale: 1
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "data-visualization-04",
        sectionRef: projectFour,
        visible: visibleSections.includes(projectFour.current),
        index: 4,
        category: "Data Visualization",
        title: "Heritage Knowledge Explorer",
        description: "Prototype a mobile app generating personalized heritage tours via voice/text queries, powered by a 5,000-node knowledge graph.",
        buttonText: "View project",
        buttonLink: "/projects/heritage-explorer",
        images: [
          {
            src: data4Image,
            alt: "Heritage Knowledge Explorer preview 1"
          },
          {
            src: data4_4Image,
            alt: "Heritage Knowledge Explorer preview 2"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "data-visualization-05",
        sectionRef: projectFive,
        visible: visibleSections.includes(projectFive.current),
        index: 5,
        category: "Data Visualization",
        title: "Bike-Sharing in Epidemic Era",
        description: "Created an explainable AI model using SHAP values to decode how pandemic policies and weather impacted urban mobility.",
        buttonText: "View project",
        buttonLink: "/projects/bike-sharing",
        logos: [
          {
            src: bikelogo,
            alt: "Bike-sharing logo",
            dataLogo: "bike"
          }
        ],
        images: [
          {
            src: data5_2Image,
            alt: "Bike sharing analysis dashboard preview 1"
          },
          {
            src: data5Image,
            alt: "Bike sharing analysis dashboard preview 2"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "data-visualization-06",
        alternate: true,
        sectionRef: projectSix,
        visible: visibleSections.includes(projectSix.current),
        index: 6,
        category: "Data Visualization",
        title: "Infrastructure Equality",
        description: "Developed a multi-objective optimization framework combining geospatial analysis and evolutionary algorithms to balance flood risks, infrastructure costs, and social equity.",
        buttonText: "View project",
        buttonLink: "/projects/infrastructure",
        images: [
          {
            src: data6_1Image,
            alt: "Infrastructure optimization visualization 1"
          },
          {
            src: data6Image,
            alt: "Infrastructure optimization visualization 2"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "creative-computing-07",
        sectionRef: projectSeven,
        visible: visibleSections.includes(projectSeven.current),
        index: 7,
        category: "Creative Computing",
        title: "Fireboy & Watergirl",
        description: "Built a Python-based 2D platformer with dynamically generated levels, enabling two players to collaborate in real-time to solve physics-driven puzzles and navigate shifting obstacles.",
        buttonText: "View project",
        buttonLink: "/projects/fireboy-watergirl",
        images: [
          {
            src: data7_1Image,
            alt: "Fireboy & Watergirl visualization 1"
          },
          {
            src: data7Image,
            alt: "Fireboy & Watergirl visualization 2"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { id: "contact", children: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const usesBackgroundPlaceholder = "/assets/uses-background-placeholder-ppC4yTdE.jpg";
const usesBackground = "/assets/uses-background-DVBwh5G1.mp4";
const table = "_table_1ajow_2";
const row = "_row_1ajow_7";
const headCell = "_headCell_1ajow_21";
const cell = "_cell_1ajow_26";
const styles$1 = {
  table,
  row,
  headCell,
  cell
};
const Table = ({ children }) => /* @__PURE__ */ jsx("table", { className: styles$1.table, children });
const TableRow = ({ children }) => /* @__PURE__ */ jsx("tr", { className: styles$1.row, children });
const TableBody = ({ children }) => /* @__PURE__ */ jsx("tbody", { className: styles$1.body, children });
const TableHeadCell = ({ children }) => /* @__PURE__ */ jsx("th", { className: styles$1.headCell, children });
const TableCell = ({ children }) => /* @__PURE__ */ jsx("td", { className: styles$1.cell, children });
const uses = "_uses_7vfxj_1";
const section = "_section_7vfxj_5";
const styles = {
  uses,
  section
};
const meta$1 = () => {
  return baseMeta({
    title: "Uses",
    description: "A list of hardware and software I use to do my thing"
  });
};
const Uses = () => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles.uses, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: usesBackground,
          placeholder: usesBackgroundPlaceholder,
          opacity: 0.7
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: "Uses",
          description: "A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Design" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://www.figma.com", children: "Figma" }),
            " is my primary tool for UI design these days. Made the switch from Sketch in 2020 and haven’t looked back. I’ve also created",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.figma.com/@hamish", children: "a few plugins" }),
            " that you can install."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "Any motion graphics I create are created in Adobe After Effects. So far I haven’t found a non-Adobe product that’s as good. If anyone has suggestions please ",
            /* @__PURE__ */ jsx(Link, { href: "/contact", children: "message me" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For any 3D models and video editing I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.blender.org/", children: "Blender" }),
            ". Since 2.8 it’s become way simpler to use and in a lot of ways better than expensive paid tools like 3DS Max or Maya."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Development" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I use ",
            /* @__PURE__ */ jsx(Link, { href: "https://vscodium.com/", children: "VSCodium" }),
            " as my text editor, with the Tokyo Night theme and Operator Mono as my typeface of choice."
          ] }),
          /* @__PURE__ */ jsx(ListItem, { children: "Firefox is my main browser for both development and general use." }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://reactjs.org/", children: "React" }),
            " is my front end Javascript library of choice. The component-centric mental model is the first thing that truly made sense to me as a designer."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For 3D effects and image shaders I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://threejs.org/", children: "three.js" }),
            ". It has a bit of a learning curve but you can do some really powerful stuff with it."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For CSS I’ve used a myriad pre-processors and css-in-js solutions like styled-components, but these days I’m using vanilla CSS with",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://postcss.org/", children: "PostCSS" }),
            " to get upcoming CSS features today."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For Javascript animations I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.framer.com/motion/", children: "Framer Motion" }),
            ", it’s a great way to add spring animations to React and three.js."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For building and testing UI components in isolation I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://storybook.js.org/", children: "Storybook" }),
            ". Check out the",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://storybook.hamishw.com", children: "storybook for this website" }),
            "."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { stretch: true, width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "System" }),
        /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Desktop" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Custom built" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Operating system" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Arch Linux (by the way)" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Browser" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Zen Browser" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Monitor" }),
            /* @__PURE__ */ jsx(TableCell, { children: "1440p IPS 144hz LG 27GL850" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Keyboard" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Tofu65" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Mouse" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Logitech G403" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Laptop" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Macbook Pro 14″" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Headphones" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Audio Technica ATH-M50x/Apple Airpods" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Microphone" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Blue Yeti" })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uses,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error: error2 });
}
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-D2wyPbl0.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/components-InTK3wdF.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-Bxydb2KR.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/components-InTK3wdF.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/error-C6Lm8QIs.js", "/assets/visually-hidden-CH9klrSA.js", "/assets/heading-DBM6cEeA.js", "/assets/useWindowSize-Br1Aw5Uy.js", "/assets/config-DFiBtguG.js", "/assets/decoder-text-WfaU9JxB.js", "/assets/image-NZsUV6ku.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js"], "css": ["/assets/root-Dw-VgMiD.css", "/assets/heading-UwcgqAqE.css", "/assets/error-BT7XG2_u.css", "/assets/decoder-text-DBrw8y_Y.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/image-Db9mAJ2F.css"] }, "routes/articles.modern-styling-in-react": { "id": "routes/articles.modern-styling-in-react", "parentId": "routes/articles", "path": "modern-styling-in-react", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.modern-styling-in-react-CjBa4XmN.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/index-BW8I-Isz.js"], "css": [] }, "routes/projects.fireboy-watergirl": { "id": "routes/projects.fireboy-watergirl", "parentId": "root", "path": "projects/fireboy-watergirl", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-0Cz81Mjv.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/footer-n9IpUovb.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/project.module-DB_xjCXl.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/image-NZsUV6ku.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-DuckKVIj.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/project-C8oXv4p4.css", "/assets/image-Db9mAJ2F.css", "/assets/meta-bt1j5RCD.css", "/assets/project-BXNRjCqh.css"] }, "routes/projects.heritage-explorer": { "id": "routes/projects.heritage-explorer", "parentId": "root", "path": "projects/heritage-explorer", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-C68VdX1H.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/footer-n9IpUovb.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/project.module-DB_xjCXl.js", "/assets/image-optimization-OY1KsbOi.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/image-NZsUV6ku.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-D2w6n_gz.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/project-C8oXv4p4.css", "/assets/image-Db9mAJ2F.css", "/assets/meta-bt1j5RCD.css", "/assets/project-BXNRjCqh.css", "/assets/image-optimization-CDQMUHoy.css"] }, "routes/projects.volkihar-knight": { "id": "routes/projects.volkihar-knight", "parentId": "root", "path": "projects/volkihar-knight", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route--R830W48.js", "imports": ["/assets/preload-helper-D7HrI6pR.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/heading-DBM6cEeA.js", "/assets/footer-n9IpUovb.js", "/assets/image-NZsUV6ku.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-TU9yO5A9.css", "/assets/heading-UwcgqAqE.css", "/assets/footer-O_oOCUsK.css", "/assets/image-Db9mAJ2F.css", "/assets/project-C8oXv4p4.css", "/assets/meta-bt1j5RCD.css"] }, "routes/projects.infrastructure": { "id": "routes/projects.infrastructure", "parentId": "root", "path": "projects/infrastructure", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CY_E0Xp-.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/footer-n9IpUovb.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/project.module-DB_xjCXl.js", "/assets/image-optimization-OY1KsbOi.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/image-NZsUV6ku.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-Bz6A2fVb.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/project-C8oXv4p4.css", "/assets/image-Db9mAJ2F.css", "/assets/meta-bt1j5RCD.css", "/assets/project-BXNRjCqh.css", "/assets/image-optimization-CDQMUHoy.css"] }, "routes/projects.smart-sparrow": { "id": "routes/projects.smart-sparrow", "parentId": "root", "path": "projects/smart-sparrow", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DMrWZDuh.js", "imports": ["/assets/preload-helper-D7HrI6pR.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/footer-n9IpUovb.js", "/assets/image-NZsUV6ku.js", "/assets/visually-hidden-CH9klrSA.js", "/assets/heading-DBM6cEeA.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-CwDSZRuz.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/image-Db9mAJ2F.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/project-C8oXv4p4.css", "/assets/meta-bt1j5RCD.css"] }, "routes/projects.bike-sharing": { "id": "routes/projects.bike-sharing", "parentId": "root", "path": "projects/bike-sharing", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-D7m-6kHu.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/footer-n9IpUovb.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/project.module-DB_xjCXl.js", "/assets/image-optimization-OY1KsbOi.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/image-NZsUV6ku.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-Cec8Yvkg.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/project-C8oXv4p4.css", "/assets/image-Db9mAJ2F.css", "/assets/meta-bt1j5RCD.css", "/assets/project-BXNRjCqh.css", "/assets/image-optimization-CDQMUHoy.css"] }, "routes/articles.hello-world": { "id": "routes/articles.hello-world", "parentId": "routes/articles", "path": "hello-world", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.hello-world-IlMurDgn.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/index-BW8I-Isz.js"], "css": [] }, "routes/projects.adaptive-ui": { "id": "routes/projects.adaptive-ui", "parentId": "root", "path": "projects/adaptive-ui", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-9Lz5IuvZ.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/footer-n9IpUovb.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/project.module-DB_xjCXl.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/image-NZsUV6ku.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-C90a4oQQ.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/project-C8oXv4p4.css", "/assets/image-Db9mAJ2F.css", "/assets/meta-bt1j5RCD.css", "/assets/project-BXNRjCqh.css"] }, "routes/projects.mr-finder": { "id": "routes/projects.mr-finder", "parentId": "root", "path": "projects/mr-finder", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Hj08cRzr.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/footer-n9IpUovb.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/project.module-DB_xjCXl.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/image-NZsUV6ku.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-QIbRSZ43.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/project-C8oXv4p4.css", "/assets/image-Db9mAJ2F.css", "/assets/meta-bt1j5RCD.css", "/assets/project-BXNRjCqh.css"] }, "routes/articles_._index": { "id": "routes/articles_._index", "parentId": "root", "path": "articles", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-D9Zf64vv.js", "imports": ["/assets/meta-B_g4uubJ.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/heading-DBM6cEeA.js", "/assets/decoder-text-WfaU9JxB.js", "/assets/divider-lsPzqSmL.js", "/assets/footer-n9IpUovb.js", "/assets/image-NZsUV6ku.js", "/assets/useWindowSize-Br1Aw5Uy.js", "/assets/date-DvyCAN0s.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/visually-hidden-CH9klrSA.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js"], "css": ["/assets/route-2ahMLohn.css", "/assets/meta-bt1j5RCD.css", "/assets/heading-UwcgqAqE.css", "/assets/decoder-text-DBrw8y_Y.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/divider-RCNywGVV.css", "/assets/footer-O_oOCUsK.css", "/assets/image-Db9mAJ2F.css"] }, "routes/projects.petpals": { "id": "routes/projects.petpals", "parentId": "root", "path": "projects/petpals", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-COWpnvQ2.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/Matching-D1yik0ma.js", "/assets/footer-n9IpUovb.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/image-NZsUV6ku.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-CZuOZquz.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/project-C8oXv4p4.css", "/assets/image-Db9mAJ2F.css", "/assets/meta-bt1j5RCD.css"] }, "routes/projects.slice": { "id": "routes/projects.slice", "parentId": "root", "path": "projects/slice", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DKNbaIhp.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/footer-n9IpUovb.js", "/assets/image-NZsUV6ku.js", "/assets/project-BNKs1UHc.js", "/assets/heading-DBM6cEeA.js", "/assets/meta-B_g4uubJ.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-DBxCm94u.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/image-Db9mAJ2F.css", "/assets/project-C8oXv4p4.css", "/assets/meta-bt1j5RCD.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/articles": { "id": "routes/articles", "parentId": "root", "path": "articles", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-3BFRxZut.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/divider-lsPzqSmL.js", "/assets/footer-n9IpUovb.js", "/assets/heading-DBM6cEeA.js", "/assets/image-NZsUV6ku.js", "/assets/meta-B_g4uubJ.js", "/assets/useParallax-BgijhgyP.js", "/assets/useScrollToHash-BQ8WfcVN.js", "/assets/clamp-e7DugykH.js", "/assets/date-DvyCAN0s.js", "/assets/components-InTK3wdF.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/list-CiZQWnP7.js", "/assets/index-BW8I-Isz.js", "/assets/config-DFiBtguG.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js"], "css": ["/assets/route-C-22_ukK.css", "/assets/divider-RCNywGVV.css", "/assets/heading-UwcgqAqE.css", "/assets/footer-O_oOCUsK.css", "/assets/image-Db9mAJ2F.css", "/assets/meta-bt1j5RCD.css", "/assets/list-A5E2UkK_.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Bzjvuj3S.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/heading-DBM6cEeA.js", "/assets/decoder-text-WfaU9JxB.js", "/assets/divider-lsPzqSmL.js", "/assets/meta-B_g4uubJ.js", "/assets/components-InTK3wdF.js", "/assets/visually-hidden-CH9klrSA.js", "/assets/config-DFiBtguG.js"], "css": ["/assets/route-DLYkOOou.css", "/assets/heading-UwcgqAqE.css", "/assets/decoder-text-DBrw8y_Y.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/divider-RCNywGVV.css", "/assets/meta-bt1j5RCD.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DNd5dRho.js", "imports": ["/assets/route-CrlkY6HG.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/Matching-D1yik0ma.js", "/assets/footer-n9IpUovb.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/meta-B_g4uubJ.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/decoder-text-WfaU9JxB.js", "/assets/visually-hidden-CH9klrSA.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/useScrollToHash-BQ8WfcVN.js", "/assets/divider-lsPzqSmL.js", "/assets/useWindowSize-Br1Aw5Uy.js", "/assets/route-Bzjvuj3S.js"], "css": ["/assets/route-BMP479eo.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/meta-bt1j5RCD.css", "/assets/decoder-text-DBrw8y_Y.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/divider-RCNywGVV.css", "/assets/route-DLYkOOou.css"] }, "routes/uses": { "id": "routes/uses", "parentId": "root", "path": "uses", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DO2yaETo.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/footer-n9IpUovb.js", "/assets/list-CiZQWnP7.js", "/assets/project-BNKs1UHc.js", "/assets/meta-B_g4uubJ.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/image-NZsUV6ku.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js", "/assets/useParallax-BgijhgyP.js"], "css": ["/assets/route-D3qy7m5X.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/list-A5E2UkK_.css", "/assets/project-C8oXv4p4.css", "/assets/image-Db9mAJ2F.css", "/assets/meta-bt1j5RCD.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-Dtrd0p7M.js", "imports": ["/assets/jsx-runtime-Lfnj0zCF.js", "/assets/error-C6Lm8QIs.js", "/assets/components-InTK3wdF.js", "/assets/heading-DBM6cEeA.js", "/assets/decoder-text-WfaU9JxB.js", "/assets/visually-hidden-CH9klrSA.js", "/assets/image-NZsUV6ku.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/useInViewport-DazAZXCp.js", "/assets/image-BvwpLhe9.js"], "css": ["/assets/error-BT7XG2_u.css", "/assets/heading-UwcgqAqE.css", "/assets/decoder-text-DBrw8y_Y.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/image-Db9mAJ2F.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DNd5dRho.js", "imports": ["/assets/route-CrlkY6HG.js", "/assets/jsx-runtime-Lfnj0zCF.js", "/assets/Matching-D1yik0ma.js", "/assets/footer-n9IpUovb.js", "/assets/heading-DBM6cEeA.js", "/assets/components-InTK3wdF.js", "/assets/config-DFiBtguG.js", "/assets/meta-B_g4uubJ.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/decoder-text-WfaU9JxB.js", "/assets/visually-hidden-CH9klrSA.js", "/assets/theme-provider-CGEkIZw1.js", "/assets/useScrollToHash-BQ8WfcVN.js", "/assets/divider-lsPzqSmL.js", "/assets/useWindowSize-Br1Aw5Uy.js", "/assets/route-Bzjvuj3S.js"], "css": ["/assets/route-BMP479eo.css", "/assets/footer-O_oOCUsK.css", "/assets/heading-UwcgqAqE.css", "/assets/meta-bt1j5RCD.css", "/assets/decoder-text-DBrw8y_Y.css", "/assets/visually-hidden-BpS8kiyk.css", "/assets/divider-RCNywGVV.css", "/assets/route-DLYkOOou.css"] } }, "url": "/assets/manifest-9f17c523.js", "version": "9f17c523" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/articles.modern-styling-in-react": {
    id: "routes/articles.modern-styling-in-react",
    parentId: "routes/articles",
    path: "modern-styling-in-react",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/projects.fireboy-watergirl": {
    id: "routes/projects.fireboy-watergirl",
    parentId: "root",
    path: "projects/fireboy-watergirl",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/projects.heritage-explorer": {
    id: "routes/projects.heritage-explorer",
    parentId: "root",
    path: "projects/heritage-explorer",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/projects.volkihar-knight": {
    id: "routes/projects.volkihar-knight",
    parentId: "root",
    path: "projects/volkihar-knight",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/projects.infrastructure": {
    id: "routes/projects.infrastructure",
    parentId: "root",
    path: "projects/infrastructure",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/projects.smart-sparrow": {
    id: "routes/projects.smart-sparrow",
    parentId: "root",
    path: "projects/smart-sparrow",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/projects.bike-sharing": {
    id: "routes/projects.bike-sharing",
    parentId: "root",
    path: "projects/bike-sharing",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/articles.hello-world": {
    id: "routes/articles.hello-world",
    parentId: "routes/articles",
    path: "hello-world",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/projects.adaptive-ui": {
    id: "routes/projects.adaptive-ui",
    parentId: "root",
    path: "projects/adaptive-ui",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/projects.mr-finder": {
    id: "routes/projects.mr-finder",
    parentId: "root",
    path: "projects/mr-finder",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/articles_._index": {
    id: "routes/articles_._index",
    parentId: "root",
    path: "articles",
    index: true,
    caseSensitive: void 0,
    module: route11
  },
  "routes/projects.petpals": {
    id: "routes/projects.petpals",
    parentId: "root",
    path: "projects/petpals",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/projects.slice": {
    id: "routes/projects.slice",
    parentId: "root",
    path: "projects/slice",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route20
  }
};
const serverBuild = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
}, Symbol.toStringTag, { value: "Module" }));
export {
  Loader as L,
  ModelAnimationType as M,
  Section as S,
  Transition as T,
  classes as a,
  useWindowSize as b,
  cssProps as c,
  numToPx as d,
  media as e,
  clamp as f,
  useTheme as g,
  mode as h,
  assetsBuildDirectory as i,
  basename as j,
  future as k,
  isSpaMode as l,
  msToNum as m,
  numToMs as n,
  entry as o,
  publicPath as p,
  routes as q,
  resolveSrcFromSrcSet as r,
  serverManifest as s,
  tokens as t,
  useInViewport as u
};
