import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../contexts/AppContext.jsx'
import TabHeader from '../common/TabHeader.jsx'
import '../../styles/components.css'

export default function WelfarePage() {
    const { userData } = useApp()
    const navigate = useNavigate()

    const handleInfoEdit = () => navigate('/info')
    const goDetail = () => navigate('/policy')

    // 상단 리스트(필터 대상)
    const allPolicies = [
        { id: 1, title: '전북 구강보건사업', org: '구강건강관리', due: '25.12.31(수) 마감', category: '보건/의료' },
        { id: 2, title: '서울 청년월세 지원', org: '서울특별시',   due: '상시',              category: '생활/안전' },
        { id: 3, title: '부산 에너지 바우처', org: '부산광역시',   due: '25.10.15(수) 마감', category: '생활/안전' },
        { id: 4, title: '전남 장성 숙박할인', org: '장성군',       due: '25.12.31(수) 마감', category: '신규' },
    ]

    // ✅ 카테고리 아래 추가로 노출할 카드들
    const morePolicies = [
        { id: 101, title: '경기 농촌일손 긴급지원', org: '경기도',       due: '25.09.30(화) 마감' },
        { id: 102, title: '대전 어르신 검진비 지원', org: '대전광역시', due: '25.12.31(수) 마감' },
        { id: 103, title: '전북 농가 재해보험',     org: '전라북도',     due: '상시' },
    ]

    const categories = ['전체', '생활/안전', '보건/의료', '신규', '인기']
    const [activeCategory, setActiveCategory] = useState('전체')

    const filtered =
        activeCategory === '전체'
            ? allPolicies
            : allPolicies.filter(p => p.category === activeCategory)

    const count = userData?.recommendedCount ?? 2

    return (
        <div className="welfare-page">
            <TabHeader />

            {/* 상단 추천복지 박스 */}
            <div className="page-content welfare-hero">
                <div className="welfare-hero__panel">
                    <div className="welfare-hero__head">
                        <span className="welfare-hero__title">추천 복지</span>
                        <button type="button" className="linklike" onClick={handleInfoEdit}>
                            정보수정 &gt;
                        </button>
                    </div>
                    <div className="welfare-hero__count">{count}건</div>
                </div>
            </div>

            {/* 필터 대상 리스트 */}
            <section className="policy-list">
                {filtered.map(p => (
                    <button key={p.id} className="policy-row" onClick={goDetail} type="button">
                        <img className="policy-row__logo" src="/images/govLogo.png" alt="보건복지부" />
                        <div className="policy-row__body">
                            <p className="policy-row__title">{p.title}</p>
                            <p className="policy-row__meta">
                                {p.org} <span className="dot">•</span> {p.due}
                            </p>
                        </div>
                    </button>
                ))}
            </section>

            {/* 카테고리 칩 */}
            <section className="filter-chips filter-chips--below">
                {categories.map(c => (
                    <button
                        key={c}
                        className={`chip ${activeCategory === c ? 'chip--active' : ''}`}
                        onClick={() => setActiveCategory(c)}
                        type="button"
                    >
                        {c}
                    </button>
                ))}
            </section>

            {/* ✅ 카테고리 아래 추가 리스트 */}
            <section className="policy-list policy-list--more">
                {morePolicies.map(p => (
                    <button key={p.id} className="policy-row" onClick={goDetail} type="button">
                        <img className="policy-row__logo" src="/images/govLogo.png" alt="보건복지부" />
                        <div className="policy-row__body">
                            <p className="policy-row__title">{p.title}</p>
                            <p className="policy-row__meta">
                                {p.org} <span className="dot">•</span> {p.due}
                            </p>
                        </div>
                    </button>
                ))}
            </section>
        </div>
    )
}

