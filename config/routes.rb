Rails.application.routes.draw do
  
  get 'message/create'

  root 'project#index'
  
  
  get 'projects', to: 'project#index'
  post 'projects', to: 'project#create'
  get 'projects/:id', to: 'project#show', as: 'project'
  get 'projects/:id/chat', to: 'project#chat', as: 'project_chat'
  # Project Messaging Routes (Chat)
  post 'messages', to: 'message#create'
end
