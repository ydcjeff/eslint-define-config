import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireReturnsOption = {
  /**
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  checkConstructors?: any;

  /**
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  checkGetters?: any;

  /**
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  contexts?: any;

  /**
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  exemptedBy?: any;

  /**
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  forceRequireReturn?: any;

  /**
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  forceReturnsWithAsync?: any;
};

/**
 * Options.
 */
export type RequireReturnsOptions = [RequireReturnsOption?];

/**
 * Requires returns are documented.
 *
 * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export type RequireReturnsRuleConfig = RuleConfig<RequireReturnsOptions>;

/**
 * Requires returns are documented.
 *
 * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export interface RequireReturnsRule {
  /**
   * Requires returns are documented.
   *
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  'jsdoc/require-returns': RequireReturnsRuleConfig;
}
