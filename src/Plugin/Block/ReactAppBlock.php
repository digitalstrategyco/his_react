<?php

namespace Drupal\react_demo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'React App Block'.
 *
 * @Block(
 *   id = "react_app_block",
 *   admin_label = @Translation("React App Block")
 * )
 */
class ReactAppBlock extends BlockBase {
  public function build() {
    return [
      '#markup' => '<div id="react-app"></div>',
      '#attached' => [
        'library' => [
          'react_demo/react_demo_assets',
        ],
      ],
    ];
  }
}
