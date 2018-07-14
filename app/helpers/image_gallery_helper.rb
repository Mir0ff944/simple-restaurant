# frozen_string_literal: true

module ImageGalleryHelper
  def image_gallery_builder(image_path, alt_message = nil)
    "
    <div class='col-md-auto'>
      <a class='image-link' href='#{image_path}' data-lightbox='gallery'>
        <img class='image-preview' src='#{get_image_preview(image_path)}' alt='#{alt_message}'>
      </a>
    </div>
    ".html_safe
  end

  private

  def get_image_preview(image_path)
    preview = image_path.split('.')
    preview.insert(1, '_preview.')
    preview.join
  end
end
