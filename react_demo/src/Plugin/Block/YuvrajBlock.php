<?php

namespace Drupal\react_demo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Top Yuvraj Block'.
 *
 * @Block(
 *   id = "react_app_block10",
 *   admin_label = @Translation("Top Yuvraj Block")
 * )
 */
class YuvrajBlock extends BlockBase {
  public function build() {
    return [
      '#markup' => '<div id="react-app8"></div>',
      '#attached' => [
        'library' => [
          'react_demo/react_demo_assets',
        ],
      ],
    ];
  }
}
