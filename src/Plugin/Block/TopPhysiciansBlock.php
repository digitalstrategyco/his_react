<?php

namespace Drupal\react_demo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Top Physicians Block'.
 *
 * @Block(
 *   id = "react_app_block4",
 *   admin_label = @Translation("Top Physicians Block")
 * )
 */
class TopPhysiciansBlock extends BlockBase {
  public function build() {
    return [
      '#markup' => '<div id="react-app3"></div>',
      '#attached' => [
        'library' => [
          'react_demo/react_demo_assets',
        ],
      ],
    ];
  }
}
