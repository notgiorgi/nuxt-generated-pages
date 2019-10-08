<script>
import Header from 'CustomComponent/Header'
import Footer from 'CustomComponent/Footer'
import Content from 'CustomComponent/Content'
import { mockFetchPageData } from '../../helpers'
import matchPath from '../../helpers/matchPath'

export default {
  components: {
    Header,
    Footer,
    Content
  },
  computed: {
    HeaderData() {
      return this.pageData.section_data.find(
        (section) => section.section_id === '1'
      )
    },
    FooterData() {
      return this.pageData.section_data.find(
        (section) => section.section_id === '2'
      )
    },
    ContentData() {
      return this.pageData.section_data.find(
        (section) => section.section_id === '3'
      )
    }
  },
  render(h) {
    return h('div', [
      h('h1', ['Welcome to ' + this.pageData.name + ' Page']),
      h('Header', {
        props: {
          ...this.HeaderData
        }
      }),
      h('Footer', {
        props: {
          ...this.FooterData
        }
      }),
      h('Content', {
        props: {
          ...this.ContentData
        }
      })
    ])
  },
  async asyncData(ctx) {
    let pageData

    const {
      params: { id }
    } = matchPath(ctx.route.fullPath, {
      exact: true,
      path: '/MasterPage/:id'
    })

    pageData = await mockFetchPageData(id)

    return { pageData }
  }
}
</script>
