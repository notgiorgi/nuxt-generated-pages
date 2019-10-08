<script>
import Header from 'CustomComponent/Header'
import Footer from 'CustomComponent/Footer'
import { mockFetchPageData } from '../../helpers'
import matchPath from '../../helpers/matchPath'

export default {
  components: {
    Header,
    Footer
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
      })
    ])
  },
  async asyncData(ctx) {
    let pageData
    console.log('client side run')
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
