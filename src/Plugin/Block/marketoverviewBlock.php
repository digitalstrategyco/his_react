<?php

namespace Drupal\react_demo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Marketoverview Block'.
 *
 * @Block(
 *   id = "react_app_block5",
 *   admin_label = @Translation("Market overview Block")
 * )
 */
class marketoverviewBlock extends BlockBase {
  public function build() {
    return [
      '#markup' => '<div id="react-app5"></div>',
      '#attached' => [
        'library' => [
          'react_demo/react_demo_assets',
        ],
      ],
    ];
  }
}
