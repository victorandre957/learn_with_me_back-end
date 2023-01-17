const validateSeed = (fileName) => {
  return strapi.db.query(`api::executed-seed.executed-seed`).findOne({
    where: { file_name: fileName },
  });
};

const finishSeed = async (fileName) => {
  await strapi.db.query(`api::executed-seed.executed-seed`).create({
    data: {
      file_name: fileName,
    },
  });
};

async function execOnlyOnce(fileName, func) {
  const seedHasRun = await validateSeed(fileName);
  if (!seedHasRun) {
    await func()
      .then(() => {
        strapi.log.info(`Seed: ${fileName}`);
        finishSeed(fileName);
      })
      .catch((e) => {
        strapi.log.error(`Error at seeding: ${fileName}`);
        console.error(e);
      });
  }
}

module.exports = { execOnlyOnce };
