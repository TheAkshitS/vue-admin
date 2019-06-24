import {
  handleEmptyProp,
  handleSchemaValidation,
} from '@handlers/error/src'

/**
 * Defaults - Default attributes for the Resource component
 *
 * @return {Object} An object containing props and methods
 */
export default () => {
  const component = 'Resource'

  function parseResponse(response) {
    const { data } = response
    return Object.assign({}, response, { data })
  }

  function parseResponsesFunc() {
    return {
      set parseList(response) { return parseResponse(response) },
      set parseSingle(response) { return parseResponse(response) },
    }
  }

  function redirectFunc() {
    return {
      views: {
        create: 'list',
        edit: 'show',
      },
    }
  }

  /**
   * Resource default props
   */
  const apiUrl = handleEmptyProp({ prop: 'apiUrl', at: component })
  const list = handleEmptyProp({ prop: 'list', at: component })
  const name = handleEmptyProp({ prop: 'name', at: component })
  const parseResponses = parseResponsesFunc
  const redirect = redirectFunc
  const resourceIdName = 'id'
  const userPermissionsField = 'permissions'

  /**
   * Resource default validations
   */
  function validateRedirect(redirectToValidate) {
    return handleSchemaValidation({
      schema: redirectToValidate,
      prop: 'redirect',
      at: component,
    })
  }

  return {
    props: {
      name,
      list,
      resourceIdName,
      userPermissionsField,
      apiUrl,
      redirect,
      parseResponses,
    },
    validate: {
      redirect: validateRedirect,
    },
  }
}
