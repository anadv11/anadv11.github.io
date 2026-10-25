# frozen_string_literal: true

module BookBlogPosts
  REVIEW_PLACEHOLDER = /\A\s*review coming soon\s*\.?\s*\z/i

  class Generator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      books = site.collections['books']&.docs
      return unless books

      books.each do |book|
        next unless publish_as_blog_post?(book)

        site.collections['posts'].docs << build_post(site, book)
      end
    end

    def publish_as_blog_post?(book)
      return false if book.data['blog_post'] == false

      content = book.content.to_s.strip
      return false if content.empty?
      return false if content.match?(REVIEW_PLACEHOLDER)

      content.length >= 40
    end

    def build_post(site, book)
      date = book_post_date(book.data)
      slug = File.basename(book.path, '.*')
      slug = slug.downcase.gsub(/[^a-z0-9]+/, '-').gsub(/^-|-$/, '')
      path = site.in_source_dir("_posts/#{date.strftime('%Y-%m-%d')}-book-#{slug}.md")

      doc = Jekyll::Document.new(
        path,
        { site: site, collection: site.collections['posts'] }
      )

      doc.data['layout'] = 'post'
      doc.data['title'] = book.data['title']
      doc.data['description'] = book_description(book)
      doc.data['date'] = date
      doc.data['categories'] = 'reviews'
      doc.data['tags'] = %w[featured reviews]
      doc.data['book_review'] = true
      doc.data['redirect'] = book.url
      doc.data['thumbnail'] = book.data['cover'] if book.data['cover'].to_s.strip != ''
      doc.content = ''
      doc
    end

    def book_description(book)
      explicit = book.data['description']
      return explicit if explicit.to_s.strip != ''

      excerpt = book.content.to_s.strip.lines.first.to_s.strip
      excerpt = excerpt.gsub(/\[\^[^\]]+\]/, '')
      return excerpt if excerpt.length <= 280

      "#{excerpt[0, 277].strip}..."
    end

    def book_post_date(data)
      %w[finished started].each do |field|
        parsed = parse_date(data[field])
        return parsed if parsed
      end

      released = data['released']
      return Time.utc(released.to_i, 6, 1) if released.to_s.match?(/\A\d{4}\z/)

      Time.now.utc
    end

    def parse_date(value)
      return nil if value.nil?

      str = value.to_s.strip
      return nil if str.empty? || str.downcase == 'null'

      return Time.parse(str).utc if str.match?(/\d{4}-\d{2}-\d{2}/)

      if str.match?(/[A-Za-z]+\s+\d{4}/)
        begin
          return Time.parse(str).utc
        rescue ArgumentError
          return nil
        end
      end

      if str.match?(/\A\d{4}\z/)
        return Time.utc(str.to_i, 12, 31)
      end

      nil
    rescue ArgumentError
      nil
    end
  end
end
