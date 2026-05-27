import { Injectable }
from '@angular/core';

import {
  DocSection,
} from '../models/doc.model';

import {
  BACKEND_SECTION_LOADERS,
} from '../data/backend/backend-loader-map';

@Injectable({
  providedIn: 'root',
})
export class DocsLoaderService {

  async loadSection(
    sectionId: string
  ): Promise<DocSection | null> {

    const loader =
      BACKEND_SECTION_LOADERS[
        sectionId as keyof typeof BACKEND_SECTION_LOADERS
      ];

    if (!loader) {
      return null;
    }

    return await loader();
  }
}