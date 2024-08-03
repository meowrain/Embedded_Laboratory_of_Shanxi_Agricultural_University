import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react/dist/iconify.js'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '关注个人发展',
    }),
    description: (
      <Translate>
        实验室具有良好的培养体系，注重对个人的发展与培养，着重于编程技术，让每一个成员都有所收获。
      </Translate>
    ),
    header: <WebDeveloperSvg className={'h-auto w-full'} height={150} role="img" />,
    icon: <Icon icon="logos:typescript-icon" className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '良好的活动安排',
    }),
    description: (
      <Translate>
        实验室具有人文关怀，争取不浪费每一个成员的时间，不安排坐场，最大化的将时间留给成员自学，同时有学长学姐耐心解答问题。
      </Translate>
    ),
    header: <SpiderSvg className={'h-auto w-full'} height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '固定的活动场地',
    }),
    description: (
      <Translate>
        实验室具有专门的实验室场地用于成员的学习等活动使用，避免了无处可学的尴尬，最大化的保障成员的学习要求。
      </Translate>
    ),
    header: <OpenSourceSvg className={'h-auto w-full'} height={150} role="img" />,
  },
]

export default FEATURES
