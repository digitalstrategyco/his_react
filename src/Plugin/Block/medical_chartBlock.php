<?php

namespace Drupal\react_demo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Madical Chart Block'.
 *
 * @Block(
 *   id = "react_app_block2",
 *   admin_label = @Translation("Medical Chart Block")
 * )
 */
class medical_chartBlock extends BlockBase {
  public function build() {
    return [
      '#markup' => '<div id="react-app1"></div>',
      '#attached' => [
        'library' => [
          'react_demo/react_demo_assets',
        ],
      ],
    ];
  }
}
