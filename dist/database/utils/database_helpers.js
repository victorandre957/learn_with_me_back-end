async function setSeqValue(collectionPluralName) {
    try {
        //@ts-ignore
        const results = await strapi.db.connection.raw(`SELECT COALESCE(MAX(ID), 0) + 1 FROM ${collectionPluralName};`);
        const nextId = results.rows[0]['?column?'];
        //@ts-ignore
        await strapi.db.connection.raw(`SELECT setval('${collectionPluralName}_id_seq', ${nextId}, true);`);
    }
    catch (error) {
        if (error.code === 'SQLITE_ERROR')
            return;
        throw error;
    }
}
module.exports = {
    setSeqValue,
};
