
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).notNullable().unique();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128).notNullable().unique();
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('instruction_name', 128).notNullable().unique()
        tbl.string('intstructions', 128).notNullable().unique();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('ingredient_id') 
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('recipe_id') 
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.primary(['ingredient_id', 'recipe_id']);
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe_ingredients');
};
