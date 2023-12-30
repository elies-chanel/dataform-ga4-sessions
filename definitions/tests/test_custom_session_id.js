const ga4 = require("index");
const helpers = require("dataform-ga4-helpers");

const { rows } = require("includes/tests/data/source_medium_input.js");
const {
  rows: result,
} = require("includes/tests/data/custom_session_id_result.js");

// Base session config
const sessionConfig = {
  database: constants.GA4_DATABASE,
  dataset: dataform.projectConfig.vars.GA4_DATASET,
  incrementalTableName: dataform.projectConfig.vars.GA4_TABLE,
  nonIncrementalTableName: dataform.projectConfig.vars.GA4_TABLE,
};

const sessions = new ga4.Session(sessionConfig);

// Rename table
sessions.target = {
  tableName: "custom_session_id",
};

// Unit testing working only for table type
sessions.getConfig = () => {
  return {
    type: "table",
  };
};

sessions.getSqlUniqueId = () => {
  return `(select value.int_value from unnest(event_params) where key = 'ga_session_id') as session_id`;
};

// Publish session model
sessions.publish();

// Run tests

test(`test_custom_session_id`)
  .dataset("custom_session_id")
  .input(
    {
      database: constants.GA4_DATABASE,
      schema: dataform.projectConfig.vars.GA4_DATASET,
      name: dataform.projectConfig.vars.GA4_TABLE,
    },
    helpers.getSqlUnionAllFromRows([rows[0]])
  )
  .expect(helpers.getSqlUnionAllFromRows(result));
