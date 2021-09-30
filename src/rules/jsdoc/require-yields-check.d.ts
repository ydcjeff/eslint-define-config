import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireYieldsCheckOption = {
  /**
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)
   */
  checkGeneratorsOnly?: any;

  /**
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)
   */
  contexts?: any;

  /**
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)
   */
  exemptedBy?: any;

  /**
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)
   */
  next?: any;
};

/**
 * Options.
 */
export type RequireYieldsCheckOptions = [RequireYieldsCheckOption?];

/**
 * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
 *
 * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)
 */
export type RequireYieldsCheckRuleConfig = RuleConfig<RequireYieldsCheckOptions>;

/**
 * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
 *
 * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)
 */
export interface RequireYieldsCheckRule {
  /**
   * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
   *
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)
   */
  'jsdoc/require-yields-check': RequireYieldsCheckRuleConfig;
}
