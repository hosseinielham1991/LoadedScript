
export type intialAddAdvertiseType = {
    fetch: typeof fetch;
    onRender?: () => void;
    element: HTMLElement;
}

export async function loadAdvertise({ element, fetch, onRender }: intialAddAdvertiseType) {

    try {
        const res = await fetch('/advertisInfo.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Record<string, string> = await res.json();
        if(onRender) {
            onRender();
        }
        element.innerHTML = data.container;
    } catch (err) {
        console.error("Fetch failed:", err);
    }

}