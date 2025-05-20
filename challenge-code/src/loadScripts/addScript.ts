
import { LoadSrc } from "./loadScript"
export function onAddScript(element: HTMLButtonElement, src: string) {

  const addScriptFunc = () => {
    LoadSrc(src).then(() => {
      console.log("call loadSrc");
    }
    ).catch((error) => {
      alert(error);
    }
    );

  }

  element.addEventListener('click', () => addScriptFunc())

}
