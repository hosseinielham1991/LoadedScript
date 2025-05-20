
import { loadAdvertise } from "./loadAdvertise";


export function intialAddAdvertise() {
    const ListSlot = Array.from(document.querySelectorAll<HTMLElement>('[data-ad-slot]'));
    for (const el of ListSlot) {
        try {
            loadAdvertise({ element: el, fetch, onRender: () => { console.log("onrender") } });
        } catch (err) {
            console.error('Ad rendering failed for slot:', err);
        }
    }

}