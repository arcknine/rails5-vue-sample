Rails.application.routes.draw do
  devise_for :users
  get 'admin' => "admin/home#index"

  root "home#index"
end
