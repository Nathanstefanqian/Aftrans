<template>
<el-dialog title="翻译记录" :visible.sync="dialogVisible" width="60%" class="my-log">
  <el-table border :data="log" class="my-log-table">
    <el-table-column prop="index" label="序号" width="40"></el-table-column>

    <el-table-column prop="from" label="原语言" width="80"></el-table-column>
    <el-table-column prop="to"   label="目标语言" width="80"></el-table-column>
    <el-table-column prop="src"  label="原文" :show-overflow-tooltip="true" ></el-table-column>
    <el-table-column prop="res"  label="译文" :show-overflow-tooltip="true" :overflow-tooltip-class-name="'my-tooltip'"></el-table-column>
    <el-table-column prop="createTime" width="94" label="翻译时间"></el-table-column>
    <el-table-column prop="" label="操作" align="center">
      <template slot-scope="{row}">
        <el-button type="danger"  @click="handleDelete(row)" size="mini">删除</el-button>
        <el-button type="primary" size="mini" @click="handleReview(row)">重现</el-button>
      </template>
    </el-table-column>

  </el-table>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</template>
<script>
  import { mapMutations,mapState } from 'vuex';
  import { MessageBox  } from 'element-ui'
 export default {
  data() {
      return {
        dialogVisible: false,
      };
    },
  computed:{...mapState('m_log',['log'])},
  methods: {
    ...mapMutations('m_log',['deleteItem']),
      handleReview(row){
        const newData=[row.src,row.res]
        this.$emit('changeData',newData)
      },
      handleDelete(row){
        MessageBox.confirm('确认删除该数据吗？','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'Warning'
      }).then(()=>{
        this.deleteItem(row.index-1)
      })
      }
    }
  };
</script>

<style lang="scss" scoped>
.my-log{
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  &-table{
    height: 400px;
    overflow: auto;
  }
}

.my-tooltip{
  max-width: 100px;
}

</style>