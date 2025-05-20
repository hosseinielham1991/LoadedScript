const ListScript: Record<string, Promise<void>> = {};

export function LoadSrc(src: string): Promise<void> {
  if (ListScript[src] !== undefined) return ListScript[src];

  ListScript[src] = new Promise((resolve, reject) => {

    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    script.onload = () => {
      console.log("loaded script");
      resolve();
    };
    script.onerror = () => {
      delete ListScript[src];
      script.remove();
      reject(new Error(`Failed to load script: ${src}`));
    };

    document.head.appendChild(script);
  });

  return ListScript[src];
}
