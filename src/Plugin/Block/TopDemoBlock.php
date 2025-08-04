<?php

namespace Drupal\react_demo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Top Demo Block'.
 *
 * @Block(
 *   id = "react_app_block7",
 *   admin_label = @Translation("Top Demo Block")
 * )
 */
class TopDemoBlock extends BlockBase {
  public function build() {
    return [
      '#markup' => '<div id="react-app7"></div>',
      '#attached' => [
        'library' => [
          'react_demo/react_demo_assets',
        ],
      ],
    ];
  }
}
