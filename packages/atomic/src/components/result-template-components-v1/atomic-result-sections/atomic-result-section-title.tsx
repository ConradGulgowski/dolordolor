import {Element, Component} from '@stencil/core';
import {containsVisualElement} from '../../../utils/utils';

/**
 * The `atomic-result-section-title` element, when added to a result template,
 * changes the style and position of its content to match specifications
 * from the result list element.
 */
@Component({
  tag: 'atomic-result-section-title',
  shadow: false,
})
export class AtomicResultSectionTitle {
  @Element() private host!: HTMLElement;

  public componentDidRender() {
    this.host.classList.toggle('empty', !containsVisualElement(this.host));
  }
}
