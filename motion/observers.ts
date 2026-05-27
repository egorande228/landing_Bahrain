export function observeOnce(
  element: Element,
  callback: () => void,
  options?: IntersectionObserverInit,
) {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];

    if (!entry?.isIntersecting) return;

    callback();
    observer.disconnect();
  }, options);

  observer.observe(element);

  return () => observer.disconnect();
}
