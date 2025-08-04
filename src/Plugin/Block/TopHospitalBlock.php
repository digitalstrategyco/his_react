<?php

namespace Drupal\react_demo\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Top Hospital List Block'.
 *
 * @Block(
 *   id = "react_app_block8",
 *   admin_label = @Translation("Top Hospital List Block")
 * )
 */
class TopHospitalBlock extends BlockBase {
  public function build() {
    return [
      '#markup' => '<div id="react-app4"></div>',
      '#attached' => [
        'library' => [
          'react_demo/react_demo_assets',
        ],
      ],
    ];
  }
}
