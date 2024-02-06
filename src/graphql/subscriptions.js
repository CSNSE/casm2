/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
      id
      name
      phone
      email
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
      id
      name
      phone
      email
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
      id
      name
      phone
      email
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onCreateContact(filter: $filter, owner: $owner) {
      id
      name
      email
      message
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onUpdateContact(filter: $filter, owner: $owner) {
      id
      name
      email
      message
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onDeleteContact(filter: $filter, owner: $owner) {
      id
      name
      email
      message
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateSurvey = /* GraphQL */ `
  subscription OnCreateSurvey($filter: ModelSubscriptionSurveyFilterInput) {
    onCreateSurvey(filter: $filter) {
      id
      wetLab
      sim
      muscle
      no
      res
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSurvey = /* GraphQL */ `
  subscription OnUpdateSurvey($filter: ModelSubscriptionSurveyFilterInput) {
    onUpdateSurvey(filter: $filter) {
      id
      wetLab
      sim
      muscle
      no
      res
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSurvey = /* GraphQL */ `
  subscription OnDeleteSurvey($filter: ModelSubscriptionSurveyFilterInput) {
    onDeleteSurvey(filter: $filter) {
      id
      wetLab
      sim
      muscle
      no
      res
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
