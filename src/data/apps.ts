// 운영자 정보와 앱 목록
// 새 앱을 출시할 때는 apps에 항목을 추가하고, 이용약관은 src/pages/<slug>/terms.md로 작성
// 개인정보처리방침(/privacy)과 앱 목록(/apps)은 이 파일을 읽어 자동으로 구성됨

export const operator = {
	name: '안규원',
	email: 'gw.dev.space@gmail.com',
	// 개인정보 보호책임자 (1인 운영이면 운영자 본인)
	privacyOfficer: {
		name: '안규원',
		title: '대표',
		email: 'gw.dev.space@gmail.com',
	},
};

export interface CollectedItem {
	item: string;
	purpose: string;
	// 어디에 저장되는지와 언제까지 보관하는지
	retention: string;
}

export interface Processor {
	name: string;
	task: string;
	// 국외로 이전되는 경우 국가
	country?: string;
}

export interface AppInfo {
	slug: string;
	name: string;
	platform: string;
	description: string;
	collected: CollectedItem[];
	// 개인정보 처리를 맡기거나 개인정보가 전달되는 외부 서비스
	processors: Processor[];
	// 앱 안에서 자동으로 수집되는 정보(광고 식별자 등)가 있으면 설명
	autoCollected?: string[];
}

export const apps: AppInfo[] = [
	{
		slug: 'lottopunch',
		name: '로또펀치',
		platform: '토스 앱 (앱인토스)',
		description: '로또 번호 생성, 당첨 번호 조회, 통계 분석, 판매점 찾기를 제공하는 미니앱',
		collected: [
			{
				item: '토스 사용자 식별값 (앱인토스 익명 키를 변환한 값)',
				purpose: '저장한 번호를 사용자별로 구분하여 보관',
				retention: '이용자의 기기에 저장, 앱 데이터 삭제 시까지',
			},
			{
				item: '이용자가 저장한 번호와 회차',
				purpose: '저장 번호 관리, 당첨 결과 확인',
				retention: '토스 앱 저장소와 이용자의 기기에 저장, 이용자가 삭제할 때까지',
			},
			{
				item: '현재 위치 (위치 정보 제공에 동의한 경우)',
				purpose: '주변 판매점 찾기, 판매점까지의 거리 표시',
				retention: '이용자의 기기에서만 사용하고 저장하지 않음',
			},
			{
				item: '알림 수신 동의 여부 (동의한 경우)',
				purpose: '저장한 번호의 당첨 결과 알림 발송',
				retention: '토스에서 관리, 이용자가 동의를 철회할 때까지',
			},
		],
		processors: [
			{
				name: '비바리퍼블리카 (토스)',
				task: '미니앱 실행 환경, 데이터 저장소, 알림 발송, 광고 제공',
			},
			{
				name: '카카오 (카카오맵)',
				task: '판매점 지도 표시 (지도 위치 전달)',
			},
		],
		autoCollected: [
			'광고는 토스가 제공하는 앱인토스 광고 기능으로 표시되며, 광고 노출과 측정에 필요한 정보는 토스와 광고 사업자의 정책에 따라 처리됩니다.',
			'당첨 번호와 판매점 정보, 난수를 외부 서비스(동행복권, 호주국립대학교 양자 난수 API)에서 받아올 때 통신 과정에서 이용자의 IP 주소가 해당 서비스에 전달될 수 있습니다. 운영자는 이 정보를 수집하지 않습니다.',
		],
	},
];
