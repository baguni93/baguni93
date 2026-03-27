<template>
  <h2>MidwayTab</h2>
</template>

<script>
export default {
  name: 'MidwayTab',
  mounted() {
    console.log('최초 생성 —MidwayTab 한 번만 실행');
  },
  activated() {
    console.log('다시 탭으로 돌아옴 —MidwayTab 매번 실행');
    // API 호출, 데이터 새로고침 등
  },
  deactivated() {
    console.log('다른 탭으로 이동 —MidwayTab 캐시에 유지');
    // 타이머 정지, 이벤트 해제 등
  },
  unmounted() {
    console.log('MidwayTab 완전히 제거됨');
  },
};
</script>
