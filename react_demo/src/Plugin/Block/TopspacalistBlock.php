<?php

namespace Drupal\react_demo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Top Specilites Block'.
 *
 * @Block(
 *   id = "react_app_block3",
 *   admin_label = @Translation("Top Specilites Block")
 * )
 */
class TopspacalistBlock extends BlockBase {
  public function build() {
    return [
      '#markup' => '<div id="react-app2"></div>',
      '#attached' => [
        'library' => [
          'react_demo/react_demo_assets',
        ],
      ],
    ];
  }
}
