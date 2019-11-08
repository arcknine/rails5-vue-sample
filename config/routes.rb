Rails.application.routes.draw do
  get 'admin' => "admin/home#index"
  root "home#index"
end
