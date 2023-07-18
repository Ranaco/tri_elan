import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

const createEmotionCache = () => {
  let insertionPoint: HTMLMetaElement | undefined;

  if (isBrowser) {
    const cacheInsetionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = cacheInsetionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
};

export default createEmotionCache;
