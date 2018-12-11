'use strict';

/**
 * Invoice.js controller
 *
 * @description: A set of functions called "actions" for managing `invoice`.
 */

module.exports = {

  /**
   * Retrieve invoice records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.invoice.search(ctx.query);
    } else {
      return strapi.services.invoice.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a invoice record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.invoice.fetch(ctx.params);
  },

  /**
   * Count invoice records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.invoice.count(ctx.query);
  },

  /**
   * Create a/an invoice record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.invoice.add(ctx.request.body);
  },

  /**
   * Update a/an invoice record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.invoice.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an invoice record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.invoice.remove(ctx.params);
  }
};
