# frozen_string_literal: true

module Playbook
  module PbForm
    class Form < ::Playbook::KitBase
      prop :form_system, type: Playbook::Props::Enum,
                         values: %w[form_with simple_form],
                         default: "form_with"
      prop :form_system_options, type: Playbook::Props::Base
      prop :validate, type: Playbook::Props::Boolean, default: false

      def form_system_options
        form_options = prop(:form_system_options)
        if form_options.is_a?(::Array)
          model, options = *form_options
          (options || {}).merge(model: model)
        else
          form_options
        end
      end

      def render_in(view_context, &block)
        form_kit.render_in(view_context, &block)
      end

    private

      def form_kit
        @form_system ||= begin
          ::Playbook::KitResolver.resolve("form/#{form_system}")
                                 .new(options: form_system_options, validate: validate, children: children)
        end
      end
    end
  end
end
