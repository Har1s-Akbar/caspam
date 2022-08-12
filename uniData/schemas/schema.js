// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import header from './header'
import events from './events'
import about from './about'
import footer from './footer'
import edetail from './edetail'
import explore from './explore'
import post from './posts'
import pdetail from './pdetail'
import blockContent from './blockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    header,
    events,
    about,
    footer,
    edetail,
    explore,
    post,
    pdetail,
    blockContent,
  ]),
})
