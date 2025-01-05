import {Component} from '@angular/core';
import jpegIcon from './assets/icon.jpeg';
import pngIcon from './assets/icon.png';
import svgIcon from './assets/icon.svg';
import jpgIcon from './assets/icon.jpg';

import svgTextIcon from './assets/icon.svg' with { loader: 'text' };
import svgBinaryIcon from './assets/icon.svg' with { loader: 'binary' };
import svgFileIcon from './assets/icon.svg' with { loader: 'file' };

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Loader Option Sample</h1>
    <div class="m-4">
      <div class="flex flex-col gap-3">
        <h3>File extension Svg </h3>
        <div class="rounded-md bg-red-50 p-4">
          <code>{{ svgIcon }}</code>
        </div>
        <h3>File extension jpg</h3>
        <div class="rounded-md bg-red-50 p-4">
          <code>{{ jpgIcon }}</code>
        </div>
        <h3>File extension Jpeg</h3>
        <div class="rounded-md bg-red-50 p-4">
          <code>{{ jpegIcon }}</code>
        </div>
        <h3>File extension Png</h3>
        <div class="rounded-md bg-red-50 p-4">
          <code>{{ pngIcon }}</code>
        </div>
        <h3>Loader Text</h3>
        <div class="rounded-md bg-red-50 p-4">
          <code>{{ svgTextIcon }}</code>
        </div>
        <h3>Loader binary</h3>
        <div class="rounded-md bg-red-50 p-4">
          <code>{{ svgBinaryIcon }}</code>
        </div>
        <h3>Loader File</h3>
        <div class="rounded-md bg-red-50 p-4">
          <code>{{ svgFileIcon }}</code>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  private readonly decoder = new TextDecoder("utf-8");

  protected readonly svgIcon = svgIcon;
  protected readonly jpgIcon = this.decoder.decode(jpgIcon).slice(0, 200) + "...";
  protected readonly jpegIcon = jpegIcon;
  protected readonly pngIcon = JSON.stringify(pngIcon);
  protected readonly svgTextIcon = svgTextIcon;
  protected readonly svgBinaryIcon = svgBinaryIcon;
  protected readonly svgFileIcon = svgFileIcon;
}
